
import axios from 'axios';
import { ProjectEntity } from '../domain/entities/project';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  language: string;
  html_url: string;
}

export class GitHubService {
  private readonly username: string;

  constructor(username: string) {
    this.username = username;
  }

  async getPinnedProjects(): Promise<GitHubRepo[]> {
    // This is a simplified version. A real implementation would require scraping
    // the user's profile or using a more complex GraphQL query.
    // For now, we'll fetch the user's repositories and filter by some criteria.
    const response = await axios.get<GitHubRepo[]>(`https://api.github.com/users/${this.username}/repos?sort=updated&direction=desc`);
    return response.data.slice(0, 6); // Get the 6 most recently updated repos
  }

  // This is a placeholder for a function that would transform the GitHub API response
  // into the ProjectEntity format. This would be a complex implementation that
  // would likely require additional API calls to get more details for each project.
  static mapGitHubProjectToProjectEntity(githubProject: GitHubRepo): ProjectEntity {
    return {
      id: githubProject.id.toString(),
      title: githubProject.name,
      subtitle: githubProject.description || 'A project from my GitHub',
      description: githubProject.description || 'A project from my GitHub',
      impact: {
        value: githubProject.stargazers_count.toString(),
        metric: 'Stars',
        description: 'On GitHub',
      },
      highlights: [],
      technologies: [githubProject.language],
      timeline: [],
      githubUrl: githubProject.html_url,
    };
  }
}
