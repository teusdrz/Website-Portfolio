import { ProcessesRepository } from '../../domain/repositories/ProcessesRepository';
import { ProcessesEntity, ProcessStep } from '../../domain/entities/Processes';

export class InMemoryProcessesRepository implements ProcessesRepository {
    async getProcessesInfo(): Promise<ProcessesEntity> {
        const steps: ProcessStep[] = [
            {
                id: '1',
                title: 'Finding the problem',
                description: 'Defining the parameters of success',
                details: 'Deep analysis of project requirements and objectives',
                order: 1
            },
            {
                id: '2',
                title: 'Checking the problem',
                description: 'And is it a problem at all?',
                details: 'Validation if there is really a problem to be solved',
                order: 2
            },
            {
                id: '3',
                title: 'Solution Hypothesis',
                description: 'In words or a simple diagram',
                details: 'Creation of hypotheses and documented initial solutions',
                order: 3
            },
            {
                id: '4',
                title: 'Solution Evaluation',
                description: 'Breaking down the complicated into simple',
                details: 'Analysis and breaking down the solution into smaller manageable parts',
                order: 4
            },
            {
                id: '5',
                title: 'Prototype and verification',
                description: 'Corridor and usability tests',
                details: 'Prototype development and usability testing',
                order: 5
            },
            {
                id: '6',
                title: 'Final Design',
                description: 'Team Review',
                details: 'Final design refinement with team review',
                order: 6
            },
            {
                id: '7',
                title: 'Development',
                description: 'Quality control and answers to questions',
                details: 'Implementation with quality control and technical support',
                order: 7
            },
            {
                id: '8',
                title: 'Release',
                description: 'Watching how users behave',
                details: 'Launch and monitoring of user behavior',
                order: 8
            },
            {
                id: '9',
                title: 'Metrics analysis',
                description: 'Checking to see if the hypothesis worked',
                details: 'Metrics analysis to validate if hypotheses worked',
                order: 9
            }
        ];

        return new ProcessesEntity(
            'Processes',
            'My development process',
            'I can easily create prototypes and conduct usability tests! If it\'s necessary to work at full capacity, I can adapt and activate accelerated mode without problems.',
            'Flexibility and teamwork are my strengths. So, what task do you have now?',
            'mailto:matheusviniciusdrs5555@gmail.com',
            steps
        );
    }
}
