import { ProjectProcessesEntity } from '../entities/ProjectProcesses';

export interface ProjectProcessesRepository {
    getProjectProcessesInfo(): Promise<ProjectProcessesEntity>;
}
