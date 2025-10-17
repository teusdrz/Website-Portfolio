
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import connectDB from '../src/infrastructure/database/mongo';
import { GitHubService } from '../src/services/GitHubService';
import { MongoProjectRepository } from '../src/infrastructure/repositories/MongoProjectRepository';
import { ProjectModel } from '../src/infrastructure/database/models/ProjectModel';

const seed = async () => {
  await connectDB();

  const githubUsername = process.env.GITHUB_USERNAME;
  if (!githubUsername) {
    console.error('GITHUB_USERNAME not found in .env file');
    process.exit(1);
  }

  const gitHubService = new GitHubService(githubUsername);
  const projectRepository = new MongoProjectRepository();

  try {
    // Clear existing projects
    await ProjectModel.deleteMany({});

    const pinnedProjects = await gitHubService.getPinnedProjects();

    for (const githubProject of pinnedProjects) {
      const project = GitHubService.mapGitHubProjectToProjectEntity(githubProject);
      await projectRepository.save(project);
    }

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit();
  }
};

seed();
