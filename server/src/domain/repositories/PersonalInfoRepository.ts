import { PersonalInfoEntity } from '../entities/PersonalInfo';

export interface PersonalInfoRepository {
  getPersonalInfo(): Promise<PersonalInfoEntity>;
}
