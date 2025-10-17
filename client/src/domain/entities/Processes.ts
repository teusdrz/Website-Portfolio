export interface ProcessStep {
    readonly id: string;
    readonly title: string;
    readonly description: string;
    readonly details?: string;
    readonly order: number;
}

export class ProcessesEntity {
    constructor(
        public readonly title: string,
        public readonly subtitle: string,
        public readonly description: string,
        public readonly contactText: string,
        public readonly contactLink: string,
        public readonly steps: ProcessStep[]
    ) { }

    getStepsByOrder(): ProcessStep[] {
        return this.steps.sort((a, b) => a.order - b.order);
    }
}
