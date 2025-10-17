
import { ProjectEntity } from '../../domain/entities/project';
import { ProjectModel } from '../database/models/ProjectModel';

export class MongoProjectRepository {
  async getAll(): Promise<ProjectEntity[]> {
    return ProjectModel.find();
  }

  async getById(id: string): Promise<ProjectEntity | null> {
    return ProjectModel.findById(id);
  }

  async save(project: ProjectEntity): Promise<ProjectEntity> {
    const newProject = new ProjectModel(project);
    return newProject.save();
  }
}
