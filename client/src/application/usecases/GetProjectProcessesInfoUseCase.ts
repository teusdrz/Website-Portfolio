import { ProjectProcessesRepository } from '../../domain/repositories/ProjectProcessesRepository';
import { ProjectProcessesEntity } from '../../domain/entities/ProjectProcesses';

export class GetProjectProcessesInfoUseCase {
    constructor(private projectProcessesRepository: ProjectProcessesRepository) { }

    async execute(): Promise<ProjectProcessesEntity> {
        return this.projectProcessesRepository.getProjectProcessesInfo();
    }
}
