import { ProjectEntity } from '../entities/Project';

export interface ProjectRepository {
    getAllProjects(): Promise<ProjectEntity[]>;
    getProjectById(id: string): Promise<ProjectEntity | null>;
    getFeaturedProjects(): Promise<ProjectEntity[]>;
}
