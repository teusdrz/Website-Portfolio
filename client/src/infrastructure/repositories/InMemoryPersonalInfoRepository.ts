import { PersonalInfoRepository } from '../../domain/repositories/PersonalInfoRepository';
import { PersonalInfoEntity } from '../../domain/entities/PersonalInfo';

export class InMemoryPersonalInfoRepository implements PersonalInfoRepository {
    async getPersonalInfo(): Promise<PersonalInfoEntity> {
        // Dados das informações pessoais
        const personalData = {
            name: 'Matheus Vinicius',
            title: 'Full Stack Developer',
            avatarUrl: '/assets/avatar.svg', // ou uma URL de avatar real
            email: 'matheusviniciusdrs5555@gmail.com',
            telegram: '@teusdrz', // ou seu telegram
            linkedin: 'https://www.linkedin.com/in/matheus-vinicius-82b50a26b/'
        };

        return new PersonalInfoEntity(
            personalData.name,
            personalData.title,
            personalData.avatarUrl,
            personalData.email,
            personalData.telegram,
            personalData.linkedin
        );
    }
}
