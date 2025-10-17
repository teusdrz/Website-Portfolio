import { AboutInfoRepository } from '../../domain/repositories/AboutInfoRepository';
import { AboutInfoEntity } from '../../domain/entities/AboutInfo';

export class InMemoryAboutInfoRepository implements AboutInfoRepository {
  private readonly aboutInfo = AboutInfoEntity.create({
    title: 'Junior Full Stack Developer',
    description: 'Junior developer passionate about technology and constantly learning. Focused on building efficient solutions and gaining experience in challenging projects.',
    hardSkills: [
      'JavaScript & TypeScript',
      'React & Node.js',
      'HTML5 & CSS3',
      'Git & GitHub',
      'PostgreSQL & MongoDB',
      'Express.js & REST APIs'
    ],
    softSkills: [
      'Fast Learning',
      'Teamwork',
      'Clear Communication',
      'Proactivity',
      'Dedication',
      'Problem Solving'
    ],
    highlights: []
  });

  async getAboutInfo(): Promise<AboutInfoEntity> {
    return this.aboutInfo;
  }
}
