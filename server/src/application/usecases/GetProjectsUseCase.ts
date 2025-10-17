
import { ProjectEntity } from '../../domain/entities/project';
import { MongoProjectRepository } from '../../infrastructure/repositories/MongoProjectRepository';

export class GetProjectsUseCase {
  constructor(private readonly projectRepository: MongoProjectRepository) {}

  async execute(): Promise<ProjectEntity[]> {
    return this.projectRepository.getAll();
  }
}
