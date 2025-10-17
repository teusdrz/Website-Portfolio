import React, { useState, useEffect } from 'react';
import { PersonalInfoEntity } from '../../domain/entities/PersonalInfo';
import { GetPersonalInfoUseCase } from '../../application/usecases/GetPersonalInfoUseCase';
import { InMemoryPersonalInfoRepository } from '../../infrastructure/repositories/InMemoryPersonalInfoRepository';
import { InstagramIcon, EmailIcon, LinkedInIcon } from './Icons';
import {
    FinalContainer,
    FinalContent,
    Avatar,
    ThankYouMessage,
    FinalTitle,
    FinalSubtitle,
    ContactSection,
    ContactTitle,
    ContactDescription,
    SocialLinks,
    SocialLink,
    BackToTopButton,
    LoadingContainer,
    ErrorContainer,
} from './Final.styles';

interface FinalProps {
    isVisible: boolean;
    onBackToTop: () => void;
}

const Final: React.FC<FinalProps> = ({ isVisible, onBackToTop }) => {
    const [personalInfo, setPersonalInfo] = useState<PersonalInfoEntity | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPersonalInfo = async () => {
            try {
                const repository = new InMemoryPersonalInfoRepository();
                const useCase = new GetPersonalInfoUseCase(repository);
                const data = await useCase.execute();
                setPersonalInfo(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Falha ao carregar informações pessoais');
            } finally {
                setLoading(false);
            }
        };

        if (isVisible) {
            loadPersonalInfo();
        }
    }, [isVisible]);

    if (loading) {
        return (
            <FinalContainer isVisible={isVisible}>
                <LoadingContainer>
                    <p>Carregando...</p>
                </LoadingContainer>
            </FinalContainer>
        );
    }

    if (error || !personalInfo) {
        return (
            <FinalContainer isVisible={isVisible}>
                <ErrorContainer>
                    <h2>Oops! Algo deu errado</h2>
                    <p>{error || 'Falha ao carregar informações pessoais'}</p>
                </ErrorContainer>
            </FinalContainer>
        );
    }

    return (
        <FinalContainer isVisible={isVisible}>
            <FinalContent>
                <Avatar
                    src={personalInfo.avatarUrl}
                    alt={`${personalInfo.name} avatar`}
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ1IiBoZWlnaHQ9IjE0NSIgdmlld0JveD0iMCAwIDE0NSAxNDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNDUiIGhlaWdodD0iMTQ1IiByeD0iNzIuNSIgZmlsbD0iIzUwRkY2QyIvPgo8dGV4dCB4PSI3Mi41IiB5PSI4MCIgZm9udC1mYW1pbHk9IlNGIFBybyBEaXNwbGF5IiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjMUExQTFBIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7wn5mCPC90ZXh0Pgo8L3N2Zz4K';
                    }}
                />

                <ThankYouMessage>
                    <FinalTitle>Thank you for visiting! 🚀</FinalTitle>
                    <FinalSubtitle>I hope you enjoyed the journey</FinalSubtitle>
                </ThankYouMessage>

                <ContactSection>
                    <ContactTitle>Let's work together?</ContactTitle>
                    <ContactDescription>
                        I'm always open to discussing new opportunities, interesting projects
                        or simply talking about technology and development.
                    </ContactDescription>

                    <SocialLinks>
                        <SocialLink href="https://www.instagram.com/teusdrz/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                            <div>
                                <div>Instagram</div>
                                <div style={{ color: '#50FF6C' }}>@teusdrz</div>
                            </div>
                        </SocialLink>

                        <SocialLink href="mailto:matheusviniciusdrs5555@gmail.com">
                            <EmailIcon />
                            <div>
                                <div>Email</div>
                                <div style={{ color: '#50FF6C' }}>matheusviniciusdrs5555@gmail.com</div>
                            </div>
                        </SocialLink>

                        <SocialLink href="https://www.linkedin.com/in/matheus-vinicius-82b50a26b/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon />
                            <div>
                                <div>LinkedIn</div>
                                <div style={{ color: '#50FF6C' }}>Matheus Vinicius</div>
                            </div>
                        </SocialLink>
                    </SocialLinks>
                </ContactSection>

                <BackToTopButton onClick={onBackToTop}>
                    ↑ Back to Top
                </BackToTopButton>
            </FinalContent>
        </FinalContainer>
    );
};

export default Final;
