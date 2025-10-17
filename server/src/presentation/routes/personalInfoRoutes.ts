import { Router } from 'express';
import { PersonalInfoController } from '../controllers/PersonalInfoController';
import { GetPersonalInfoUseCase } from '../../application/usecases/GetPersonalInfoUseCase';
import { InMemoryPersonalInfoRepository } from '../../infrastructure/repositories/InMemoryPersonalInfoRepository';

const router = Router();

// Dependency injection
const personalInfoRepository = new InMemoryPersonalInfoRepository();
const getPersonalInfoUseCase = new GetPersonalInfoUseCase(personalInfoRepository);
const personalInfoController = new PersonalInfoController(getPersonalInfoUseCase);

router.get('/personal-info', (req, res) =>
  personalInfoController.getPersonalInfo(req, res)
);

export { router as personalInfoRoutes };
