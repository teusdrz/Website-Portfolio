import { AboutInfoEntity } from '../entities/AboutInfo';

export interface AboutInfoRepository {
  getAboutInfo(): Promise<AboutInfoEntity>;
}
