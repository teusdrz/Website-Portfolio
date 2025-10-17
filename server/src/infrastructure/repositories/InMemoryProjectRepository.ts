import { ProjectEntity } from '../../domain/entities/project';

export class InMemoryProjectRepository {
    private projects: ProjectEntity[] = [
        {
            id: '1',
            title: 'Nexus Enterprise',
            subtitle: 'Corporate Authentication System',
            description: 'Complete corporate system for authentication and business management with advanced analytics dashboard. Nexus Enterprise is a complete solution for corporate authentication, developed with Java and React. The system offers JWT authentication, role-based access control (RBAC), real-time analytics dashboard, complete user management and professional reporting system.',
            technologies: [
                'Java 21',
                'Spring Boot',
                'React 18',
                'TypeScript',
                'JWT Authentication',
                'Maven',
                'GSAP Animations',
                'TailwindCSS',
                'REST API'
            ],
            githubUrl: 'https://github.com/teusdrz/java-login-system',
            impact: {
                metric: 'Enterprise Users',
                value: '50+',
                description: 'Corporate users managed with complete profiles'
            },
            highlights: [
                {
                    icon: '🔐',
                    title: 'Enterprise Security',
                    description: 'JWT + RBAC with advanced security policies'
                },
                {
                    icon: '📊',
                    title: 'Advanced Analytics',
                    description: 'Dashboard with real-time metrics and visualizations'
                },
                {
                    icon: '🎨',
                    title: 'Professional UI',
                    description: 'Modern interface with GSAP animations and responsive design'
                }
            ],
            timeline: [
                {
                    phase: 'Architecture',
                    duration: '1 week',
                    description: 'Enterprise architecture definition and technology stack'
                },
                {
                    phase: 'Backend Development',
                    duration: '3 weeks',
                    description: 'REST API development with Java/Spring Boot'
                },
                {
                    phase: 'Frontend Development',
                    duration: '2 weeks',
                    description: 'React interface with TypeScript and GSAP animations'
                },
                {
                    phase: 'Testing & Deploy',
                    duration: '1 week',
                    description: 'Complete testing, documentation and deployment'
                }
            ]
        },
        {
            id: '2',
            title: 'Layla AI',
            subtitle: 'Intelligent Virtual Assistant',
            description: 'AI-powered virtual assistant for task automation and intelligent customer service. Layla AI is an intelligent virtual assistant developed to automate complex tasks and provide personalized service. Using advanced natural language processing and machine learning technologies, Layla offers humanized interactions and precise contextual responses.',
            technologies: [
                'Python',
                'Natural Language Processing',
                'Machine Learning',
                'TensorFlow',
                'FastAPI',
                'React',
                'WebSocket',
                'OpenAI API',
                'Speech Recognition'
            ],
            githubUrl: 'https://github.com/teusdrz/Layla-IA',
            impact: {
                metric: 'Response Accuracy',
                value: '94%',
                description: 'Accuracy in responses and contextual understanding'
            },
            highlights: [
                {
                    icon: '🤖',
                    title: 'Advanced AI',
                    description: 'Machine Learning with natural language processing'
                },
                {
                    icon: '🎙️',
                    title: 'Voice Interface',
                    description: 'Voice recognition and natural speech synthesis'
                },
                {
                    icon: '🧠',
                    title: 'Continuous Learning',
                    description: 'System that evolves with user interactions'
                }
            ],
            timeline: [
                {
                    phase: 'Research & Planning',
                    duration: '2 weeks',
                    description: 'AI technology research and architecture definition'
                },
                {
                    phase: 'Core AI Development',
                    duration: '4 weeks',
                    description: 'AI core development and NLP'
                },
                {
                    phase: 'Interface & Integration',
                    duration: '3 weeks',
                    description: 'User interface and API integration'
                },
                {
                    phase: 'Training & Optimization',
                    duration: '2 weeks',
                    description: 'Model training and performance optimizations'
                }
            ]
        },
        {
            id: '3',
            title: 'Pet Triage Pro',
            subtitle: 'Veterinary Emergency System',
            description: 'Intelligent triage system for veterinary clinics with automatic urgency classification. Pet Triage Pro is a specialized system for veterinary clinics that automates the emergency triage process. Using intelligent algorithms, the system automatically classifies the urgency of cases based on symptoms, history and animal conditions, optimizing care and saving lives.',
            technologies: [
                'React 18',
                'TypeScript',
                'Vite',
                'Tailwind CSS',
                'Node.js',
                'Express',
                'MongoDB',
                'Chart.js',
                'WebSocket'
            ],
            githubUrl: 'https://github.com/teusdrz/pet-triage-pro',
            impact: {
                metric: 'Animals Assisted',
                value: '200+',
                description: 'Animals classified and assisted with the system'
            },
            highlights: [
                {
                    icon: '🏥',
                    title: 'Intelligent Triage',
                    description: 'Classification algorithm based on veterinary protocols'
                },
                {
                    icon: '⚡',
                    title: 'Real Time',
                    description: 'Instant monitoring and notifications'
                },
                {
                    icon: '📱',
                    title: 'Mobile First',
                    description: 'Interface optimized for mobile devices and tablets'
                }
            ],
            timeline: [
                {
                    phase: 'Veterinary Research',
                    duration: '1 week',
                    description: 'Study of veterinary protocols and clinic needs'
                },
                {
                    phase: 'Algorithm Development',
                    duration: '2 weeks',
                    description: 'Development of triage classification algorithm'
                },
                {
                    phase: 'Interface & UX',
                    duration: '3 weeks',
                    description: 'Design and development of mobile-first interface'
                },
                {
                    phase: 'Testing & Validation',
                    duration: '1 week',
                    description: 'Testing with veterinarians and protocol validation'
                }
            ]
        }
    ];

    async getAllProjects(): Promise<ProjectEntity[]> {
        return [...this.projects];
    }

    async getProjectById(id: string): Promise<ProjectEntity | null> {
        const project = this.projects.find(p => p.id === id);
        return project || null;
    }

    async getFeaturedProjects(): Promise<ProjectEntity[]> {
        return [...this.projects];
    }

    async searchProjects(query: string): Promise<ProjectEntity[]> {
        const searchTerm = query.toLowerCase();
        return this.projects.filter(project =>
            project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
        );
    }
}
