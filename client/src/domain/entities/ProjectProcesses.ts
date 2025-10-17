export interface ProjectStep {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly details?: string;
    readonly order: number;
    readonly duration?: string;
}

export class ProjectProcessesEntity {
    constructor(
        public readonly title: string,
        public readonly subtitle: string,
        public readonly description: string,
        public readonly contactText: string,
        public readonly contactLink: string,
        public readonly steps: ProjectStep[]
    ) { }

    getStepsByOrder(): ProjectStep[] {
        return this.steps.sort((a, b) => a.order - b.order);
    }
}
