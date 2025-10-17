
import { Request, Response } from 'express';
import { GetProjectsUseCase } from '../../application/usecases/GetProjectsUseCase';

export class ProjectController {
  constructor(private readonly getProjectsUseCase: GetProjectsUseCase) {}

  async getProjects(req: Request, res: Response): Promise<void> {
    try {
      const projects = await this.getProjectsUseCase.execute();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
