import { ProcessesEntity } from '../entities/Processes';

export interface ProcessesRepository {
    getProcessesInfo(): Promise<ProcessesEntity>;
}
