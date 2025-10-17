export interface ProjectEntity {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    technologies: string[];
    features: string[];
    githubUrl: string;
    demoUrl?: string;
    images: {
        hero: string;
        screenshots: string[];
    };
    category: 'enterprise' | 'ai' | 'healthcare' | 'web';
    status: 'completed' | 'in-progress' | 'concept';
    impact: {
        metric: string;
        value: string;
        description: string;
    };
    highlights: {
        icon: string;
        title: string;
        description: string;
    }[];
    timeline: {
        phase: string;
        duration: string;
        description: string;
    }[];
}
