import { AboutInfoRepository } from '../../domain/repositories/AboutInfoRepository';
import { AboutInfoEntity } from '../../domain/entities/AboutInfo';

export class InMemoryAboutInfoRepository implements AboutInfoRepository {
  private readonly aboutInfo = AboutInfoEntity.create({
    title: 'Full Stack Developer',
    description: 'Desenvolvedor apaixonado por tecnologia e constantemente aprendendo. Focado em construir soluções eficientes e ganhar experiência em projetos desafiadores.',
    hardSkills: [
      'JavaScript & TypeScript',
      'React & Node.js',
      'HTML5 & CSS3',
      'Docker & Containerization',
      'GraphQL & REST APIs',
      'PostgreSQL & MongoDB',
      'Git & GitHub',
      'Express.js & Fastify',
      'SQL & NoSQL Databases',
      'AWS & Cloud Services',
      'Python & Django',
      'Next.js & Vercel'
    ],
    softSkills: [
      'Aprendizado Rápido',
      'Trabalho em Equipe',
      'Comunicação Clara',
      'Proatividade',
      'Dedicação',
      'Resolução de Problemas',
      'Liderança',
      'Adaptabilidade'
    ],
    highlights: []
  });

  async getAboutInfo(): Promise<AboutInfoEntity> {
    return this.aboutInfo;
  }
}
