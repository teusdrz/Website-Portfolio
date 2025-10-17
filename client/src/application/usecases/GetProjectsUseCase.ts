import { ProjectRepository } from '../../domain/repositories/ProjectRepository';
import { ProjectEntity } from '../../domain/entities/Project';

export class GetAllProjectsUseCase {
    constructor(private projectRepository: ProjectRepository) { }

    async execute(): Promise<ProjectEntity[]> {
        return await this.projectRepository.getAllProjects();
    }
}

export class GetProjectByIdUseCase {
    constructor(private projectRepository: ProjectRepository) { }

    async execute(id: string): Promise<ProjectEntity | null> {
        return await this.projectRepository.getProjectById(id);
    }
}

export class GetFeaturedProjectsUseCase {
    constructor(private projectRepository: ProjectRepository) { }

    async execute(): Promise<ProjectEntity[]> {
        return await this.projectRepository.getFeaturedProjects();
    }
}
