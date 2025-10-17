import { ProjectProcessesRepository } from '../../domain/repositories/ProjectProcessesRepository';
import { ProjectProcessesEntity, ProjectStep } from '../../domain/entities/ProjectProcesses';

export class InMemoryProjectProcessesRepository implements ProjectProcessesRepository {
    async getProjectProcessesInfo(): Promise<ProjectProcessesEntity> {
        const steps: ProjectStep[] = [
            {
                id: '1',
                title: 'Requirements Analysis',
                description: 'Understanding client needs and project scope',
                details: 'Detailed analysis of functional and non-functional requirements',
                order: 1,
                duration: '1-2 days'
            },
            {
                id: '2',
                title: 'Technical Planning',
                description: 'Architecture design and technology stack selection',
                details: 'Definition of architecture, technologies and project structure',
                order: 2,
                duration: '2-3 days'
            },
            {
                id: '3',
                title: 'Database Design',
                description: 'Data modeling and database structure',
                details: 'Data modeling, relationships and query optimization',
                order: 3,
                duration: '1-2 days'
            },
            {
                id: '4',
                title: 'UI/UX Prototyping',
                description: 'User interface design and user experience flow',
                details: 'Creation of prototypes, wireframes and user flow',
                order: 4,
                duration: '3-4 days'
            },
            {
                id: '5',
                title: 'Backend Development',
                description: 'API development and business logic implementation',
                details: 'Development of RESTful APIs, authentication and business logic',
                order: 5,
                duration: '1-2 weeks'
            },
            {
                id: '6',
                title: 'Frontend Development',
                description: 'User interface implementation and responsiveness',
                details: 'Interface implementation, reusable components and responsiveness',
                order: 6,
                duration: '1-2 weeks'
            },
            {
                id: '7',
                title: 'Integration & Testing',
                description: 'API integration and comprehensive testing',
                details: 'Frontend/backend integration, unit and integration testing',
                order: 7,
                duration: '3-5 days'
            },
            {
                id: '8',
                title: 'Deployment Setup',
                description: 'Production environment and CI/CD pipeline',
                details: 'Production environment setup, automated deployment',
                order: 8,
                duration: '2-3 days'
            },
            {
                id: '9',
                title: 'Quality Assurance',
                description: 'Final testing and performance optimization',
                details: 'Final testing, performance optimization and bug fixes',
                order: 9,
                duration: '2-4 days'
            },
            {
                id: '10',
                title: 'Launch & Monitoring',
                description: 'Project delivery and post-launch monitoring',
                details: 'Project delivery, monitoring and post-launch support',
                order: 10,
                duration: 'Ongoing'
            }
        ];

        return new ProjectProcessesEntity(
            'Project Creation',
            'My project creation process',
            'I have a structured methodology for full stack project development! From initial analysis to production deployment, each step is carefully planned and executed with modern technologies.',
            'Experience with React, Next.js, Node.js, PostgreSQL, Prisma and more. What type of project do you have in mind?',
            'mailto:matheusviniciusdrs5555@gmail.com',
            steps
        );
    }
}
