import { Request, Response } from 'express';
import { GetPersonalInfoUseCase } from '../../application/usecases/GetPersonalInfoUseCase';

export class PersonalInfoController {
  constructor(private readonly getPersonalInfoUseCase: GetPersonalInfoUseCase) { }

  async getPersonalInfo(req: Request, res: Response): Promise<void> {
    try {
      const personalInfo = await this.getPersonalInfoUseCase.execute();
      res.json(personalInfo);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
