import { CareerEntity } from '../entities/Career';

export interface CareerRepository {
  getCareerInfo(): Promise<CareerEntity>;
}
