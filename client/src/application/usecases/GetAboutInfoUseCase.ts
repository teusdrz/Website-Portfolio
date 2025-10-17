import { AboutInfoRepository } from '../../domain/repositories/AboutInfoRepository';
import { AboutInfoEntity } from '../../domain/entities/AboutInfo';

export class GetAboutInfoUseCase {
  constructor(private readonly aboutInfoRepository: AboutInfoRepository) { }

  async execute(): Promise<AboutInfoEntity> {
    return await this.aboutInfoRepository.getAboutInfo();
  }
}
