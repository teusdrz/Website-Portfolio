import { PersonalInfoRepository } from '../../domain/repositories/PersonalInfoRepository';
import { PersonalInfoEntity } from '../../domain/entities/PersonalInfo';

export class InMemoryPersonalInfoRepository implements PersonalInfoRepository {
    async getPersonalInfo(): Promise<PersonalInfoEntity> {
        // Dados das informações pessoais
        const personalData = {
            name: 'Matheus Website',
            title: 'Full Stack Developer',
            avatarUrl: '/assets/avatar.svg',
            email: 'matheusviniciusdrs5555@gmail.com',
            telegram: '@teusdrz',
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
