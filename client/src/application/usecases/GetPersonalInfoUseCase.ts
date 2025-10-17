import { PersonalInfoEntity } from '../../domain/entities/PersonalInfo';
import { PersonalInfoRepository } from '../../domain/repositories/PersonalInfoRepository';

export class GetPersonalInfoUseCase {
  constructor(private readonly personalInfoRepository: PersonalInfoRepository) { }

  async execute(): Promise<PersonalInfoEntity> {
    return await this.personalInfoRepository.getPersonalInfo();
  }
}
