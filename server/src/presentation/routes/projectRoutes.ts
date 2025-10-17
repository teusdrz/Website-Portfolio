
import { Router } from 'express';
import { ProjectController } from '../controllers/ProjectController';
import { GetProjectsUseCase } from '../../application/usecases/GetProjectsUseCase';
import { MongoProjectRepository } from '../../infrastructure/repositories/MongoProjectRepository';

const router = Router();

// Dependency injection
const projectRepository = new MongoProjectRepository();
const getProjectsUseCase = new GetProjectsUseCase(projectRepository);
const projectController = new ProjectController(getProjectsUseCase);

router.get('/projects', (req, res) => projectController.getProjects(req, res));

export { router as projectRoutes };
