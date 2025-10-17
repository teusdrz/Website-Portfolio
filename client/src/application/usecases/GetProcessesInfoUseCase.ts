import { ProcessesRepository } from '../../domain/repositories/ProcessesRepository';
import { ProcessesEntity } from '../../domain/entities/Processes';

export class GetProcessesInfoUseCase {
    constructor(private processesRepository: ProcessesRepository) { }

    async execute(): Promise<ProcessesEntity> {
        return this.processesRepository.getProcessesInfo();
    }
}
