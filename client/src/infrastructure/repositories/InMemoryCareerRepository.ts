import { CareerEntity, CareerExperience } from '../../domain/entities/Career';
import { CareerRepository } from '../../domain/repositories/CareerRepository';

export class InMemoryCareerRepository implements CareerRepository {
  async getCareerInfo(): Promise<CareerEntity> {
    const experiences: CareerExperience[] = [
      {
        id: '1',
        company: 'OneBitCode',
        position: 'Programming Student',
        period: '2022',
        year: 2022,
        description: 'Started my programming journey studying web development fundamentals',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        achievements: [
          'Learning programming fundamentals',
          'First contact with web development',
          'Building solid foundation in frontend technologies'
        ],
        type: 'education',
        featured: true
      },
      {
        id: '2',
        company: 'Personal Projects',
        position: 'Frontend Developer',
        period: '2023',
        year: 2023,
        description: 'Started working on practical projects and deepening knowledge in modern technologies',
        technologies: ['TypeScript', 'React', 'Node.js'],
        achievements: [
          'Development of practical projects',
          'Deepening knowledge in TypeScript and React',
          'First experiences with Node.js'
        ],
        type: 'project',
        featured: true
      },
      {
        id: '3',
        company: 'College - ADS',
        position: 'Systems Analysis and Development Student',
        period: '2024',
        year: 2024,
        description: 'Started college and deepened knowledge in databases, API integration and architecture',
        technologies: ['PostgreSQL', 'MySQL', 'SQL', 'APIs', 'Clean Code', 'DDD', 'Design Patterns'],
        achievements: [
          'Learning relational databases',
          'Clean Code and architecture concepts',
          'Design Patterns and Domain Driven Design',
          'API integration and consumption'
        ],
        type: 'education',
        featured: true
      },
      {
        id: '4',
        company: 'NowProTech',
        position: 'Developer',
        period: '2025',
        year: 2025,
        description: 'First professional opportunity where I learned Python, agile methodologies and AI technologies',
        technologies: ['Python', 'Scrum', 'Kanban', 'Jira', 'ChatBots', 'LLMs', 'RAG', 'Machine Learning'],
        achievements: [
          'Learning Python and agile methodologies',
          'Experience with Scrum, Kanban and Jira',
          'AI knowledge: ChatBots, LLMs and RAG',
          'Introduction to Machine Learning'
        ],
        type: 'work',
        featured: true
      },
      {
        id: '5',
        company: 'Rocketseat',
        position: 'Advanced Student',
        period: '2025',
        year: 2025,
        description: 'Deepening knowledge in more complex development concepts',
        technologies: ['React', 'Node.js', 'Advanced Concepts'],
        achievements: [
          'More complex development concepts',
          'Deepening knowledge in modern technologies',
          'Participation in developer community'
        ],
        type: 'education',
        featured: false
      },
      {
        id: '6',
        company: 'ComHub',
        position: 'Full Stack Developer',
        period: '2025 - Present',
        year: 2025,
        description: 'Working as full stack developer with modern stack and advanced practices',
        technologies: ['Node.js', 'React', 'Next.js', 'Prisma', 'PostgreSQL', 'Postman', 'MVC', 'Vite'],
        achievements: [
          'Full stack development with modern technologies',
          'Experience with Next.js and Prisma',
          'Code review and merge practices',
          'Automated testing with Vite',
          'MVC architecture and API integration'
        ],
        type: 'work',
        featured: true
      }
    ];

    const skills = [
      'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
      'Python', 'HTML', 'CSS', 'PostgreSQL', 'MySQL', 'Prisma',
      'Git', 'Postman', 'Jira', 'Scrum', 'Kanban', 'Clean Code',
      'DDD', 'Design Patterns', 'MVC', 'APIs', 'Machine Learning',
      'ChatBots', 'LLMs', 'RAG', 'Vite', 'Code Review'
    ];

    const currentFocus = 'Full Stack Developer at ComHub, working with modern technologies and always seeking new challenges';

    return new CareerEntity(experiences, skills, currentFocus);
  }
}
