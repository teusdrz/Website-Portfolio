import { PersonalInfoRepository } from '../../domain/repositories/PersonalInfoRepository';
import { PersonalInfoEntity } from '../../domain/entities/PersonalInfo';

export class InMemoryPersonalInfoRepository implements PersonalInfoRepository {
  private readonly personalInfo = PersonalInfoEntity.create({
    name: 'Matheus Vinicius',
    title: 'Desenvolvedor Full Stack Júnior',
    avatarUrl: '/assets/avatar.svg',
    email: 'matheusviniciusdrs5555@gmail.com',
    telegram: '@teusdrz',
    linkedin: 'https://www.linkedin.com/in/matheus-vinicius-82b50a26b/'
  });

  async getPersonalInfo(): Promise<PersonalInfoEntity> {
    return this.personalInfo;
  }
}
