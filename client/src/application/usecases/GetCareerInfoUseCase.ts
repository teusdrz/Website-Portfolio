import { CareerEntity } from '../../domain/entities/Career';
import { CareerRepository } from '../../domain/repositories/CareerRepository';

export class GetCareerInfoUseCase {
  constructor(private careerRepository: CareerRepository) { }

  async execute(): Promise<CareerEntity> {
    return await this.careerRepository.getCareerInfo();
  }
}
