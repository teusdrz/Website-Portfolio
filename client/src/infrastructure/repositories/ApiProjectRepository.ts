
import axios from 'axios';
import { ProjectEntity } from '../../domain/entities/Project';

const API_URL = 'http://localhost:3001/api';

export class ApiProjectRepository {
  async getAll(): Promise<ProjectEntity[]> {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
  }

  async getById(id: string): Promise<ProjectEntity | null> {
    // This is not ideal, but for now we'll fetch all projects and find the one we want.
    // A better solution would be to have a /projects/:id endpoint on the backend.
    const projects = await this.getAll();
    return projects.find(p => p.id === id) || null;
  }
}
