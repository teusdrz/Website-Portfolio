import { ProjectEntity } from '../../domain/entities/Project';
import { ProjectRepository } from '../../domain/repositories/ProjectRepository';

export class InMemoryProjectRepository implements ProjectRepository {
    private projects: ProjectEntity[] = [
        {
            id: '1',
            title: 'Nexus Enterprise',
            subtitle: 'Corporate Authentication System',
            description: 'Sistema corporativo completo de autenticação e gestão empresarial com dashboard analytics avançado.',
            longDescription: 'Nexus Enterprise é uma solução completa para autenticação corporativa, desenvolvida com Java e React. O sistema oferece autenticação JWT, controle de acesso baseado em roles (RBAC), dashboard com analytics em tempo real, gestão completa de usuários e sistema de relatórios profissionais. Construído seguindo padrões enterprise com arquitetura escalável.',
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
            features: [
                'Sistema de autenticação JWT seguro',
                'Dashboard analytics em tempo real',
                'Gestão completa de usuários (CRUD)',
                'Sistema de relatórios profissionais',
                'Controle de acesso baseado em roles',
                'Interface moderna com animações GSAP',
                'API RESTful documentada',
                'Arquitetura enterprise escalável'
            ],
            githubUrl: 'https://github.com/teusdrz/java-login-system',
            images: {
                hero: '/assets/projects/nexus-hero.png',
                screenshots: [
                    '/assets/projects/nexus-dashboard.png',
                    '/assets/projects/nexus-users.png',
                    '/assets/projects/nexus-reports.png'
                ]
            },
            category: 'enterprise',
            status: 'completed',
            impact: {
                metric: 'Enterprise Users',
                value: '50+',
                description: 'Usuários corporativos gerenciados com perfis completos'
            },
            highlights: [
                {
                    icon: '🔐',
                    title: 'Segurança Enterprise',
                    description: 'JWT + RBAC com políticas de segurança avançadas'
                },
                {
                    icon: '📊',
                    title: 'Analytics Avançado',
                    description: 'Dashboard com métricas em tempo real e visualizações'
                },
                {
                    icon: '🎨',
                    title: 'UI Profissional',
                    description: 'Interface moderna com animações GSAP e design responsivo'
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
            description: 'AI-powered virtual assistant for task automation and intelligent customer service.',
            longDescription: 'Layla AI is an intelligent virtual assistant developed to automate complex tasks and provide personalized service. Using advanced natural language processing and machine learning technologies, Layla offers humanized interactions and precise contextual responses.',
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
            features: [
                'Processamento de linguagem natural avançado',
                'Reconhecimento de voz e síntese de fala',
                'Aprendizado contínuo de preferências',
                'Integração com múltiplas APIs',
                'Interface conversacional intuitiva',
                'Automação de tarefas personalizadas',
                'Análise de sentimentos em tempo real',
                'Suporte multi-idioma'
            ],
            githubUrl: 'https://github.com/teusdrz/Layla-IA',
            images: {
                hero: '/assets/projects/layla-hero.png',
                screenshots: [
                    '/assets/projects/layla-chat.png',
                    '/assets/projects/layla-analytics.png',
                    '/assets/projects/layla-settings.png'
                ]
            },
            category: 'ai',
            status: 'in-progress',
            impact: {
                metric: 'Response Accuracy',
                value: '94%',
                description: 'Precisão nas respostas e entendimento contextual'
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
            subtitle: 'Sistema Veterinário de Emergência',
            description: 'Sistema inteligente de triagem para clínicas veterinárias com classificação automática de urgência.',
            longDescription: 'Pet Triage Pro é um sistema especializado para clínicas veterinárias que automatiza o processo de triagem de emergência. Utilizando algoritmos inteligentes, o sistema classifica automaticamente a urgência dos casos baseado em sintomas, histórico e condições do animal, otimizando o atendimento e salvando vidas.',
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
            features: [
                'Classificação automática de urgência',
                'Protocolo de triagem veterinária',
                'Dashboard de monitoramento em tempo real',
                'Histórico completo de atendimentos',
                'Sistema de notificações urgentes',
                'Relatórios de performance da clínica',
                'Interface otimizada para tablets',
                'Integração com sistemas existentes'
            ],
            githubUrl: 'https://github.com/teusdrz/pet-triage-pro',
            images: {
                hero: '/assets/projects/pettriage-hero.png',
                screenshots: [
                    '/assets/projects/pettriage-dashboard.png',
                    '/assets/projects/pettriage-triage.png',
                    '/assets/projects/pettriage-reports.png'
                ]
            },
            category: 'healthcare',
            status: 'completed',
            impact: {
                metric: 'Response Time',
                value: '60%',
                description: 'Redução no tempo de resposta para emergências'
            },
            highlights: [
                {
                    icon: '🏥',
                    title: 'Triagem Inteligente',
                    description: 'Algoritmo de classificação baseado em protocolos veterinários'
                },
                {
                    icon: '⚡',
                    title: 'Tempo Real',
                    description: 'Monitoramento e notificações instantâneas'
                },
                {
                    icon: '📱',
                    title: 'Mobile First',
                    description: 'Interface otimizada para dispositivos móveis e tablets'
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
        return this.projects;
    }

    async getProjectById(id: string): Promise<ProjectEntity | null> {
        return this.projects.find(project => project.id === id) || null;
    }

    async getFeaturedProjects(): Promise<ProjectEntity[]> {
        return this.projects.filter(project => project.status === 'completed');
    }
}
