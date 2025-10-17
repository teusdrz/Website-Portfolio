import React, { useState, useEffect } from 'react';
import { ProjectEntity } from '../../domain/entities/Project';
import { InMemoryProjectRepository } from '../../infrastructure/repositories/InMemoryProjectRepository';
import {
    ProjectContainer,
    ProjectContent,
    HeroSection,
    ProjectTitle,
    ProjectSubtitle,
    ProjectDescription,
    HeroImage,
    ImpactMetric,
    ImpactValue,
    ImpactDescription,
    DetailsSection,
    SectionTitle,
    HighlightsGrid,
    HighlightCard,
    HighlightIcon,
    HighlightTitle,
    HighlightDescription,
    TechStack,
    TechItem,
    TimelineSection,
    TimelineItem,
    TimelinePhase,
    TimelineDuration,
    TimelineDescription,
    ActionSection,
    ActionButton,
    BackButton,
    LoadingContainer,
    ErrorContainer
} from './ProjectDetail.styles';

interface ProjectDetailProps {
    projectId: string;
    isVisible: boolean;
    onClose: () => void;
    onNext?: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
    projectId,
    isVisible,
    onClose,
    onNext
}) => {
    const [project, setProject] = useState<ProjectEntity | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProject = async () => {
            try {
                setLoading(true);
                const repository = new InMemoryProjectRepository();
                const projectData = await repository.getProjectById(projectId);

                if (projectData) {
                    setProject(projectData);
                } else {
                    setError('Projeto não encontrado');
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Erro ao carregar projeto');
            } finally {
                setLoading(false);
            }
        };

        if (isVisible) {
            loadProject();
        }
    }, [projectId, isVisible]);

    if (loading) {
        return (
            <ProjectContainer isVisible={isVisible}>
                <LoadingContainer>
                    <p>Carregando projeto...</p>
                </LoadingContainer>
            </ProjectContainer>
        );
    }

    if (error || !project) {
        return (
            <ProjectContainer isVisible={isVisible}>
                <ErrorContainer>
                    <h2>Oops! Algo deu errado</h2>
                    <p>{error || 'Projeto não encontrado'}</p>
                </ErrorContainer>
            </ProjectContainer>
        );
    }

    const handleViewProject = () => {
        window.open(project.githubUrl, '_blank');
    };

    return (
        <ProjectContainer isVisible={isVisible}>
            <BackButton onClick={onClose}>
                ←
            </BackButton>

            <ProjectContent>
                <HeroSection>
                    <div>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                        <ProjectDescription>{project.description}</ProjectDescription>

                        <ImpactMetric>
                            <ImpactValue>{project.impact.value}</ImpactValue>
                            <div>
                                <div style={{ fontWeight: 600, marginBottom: '4px' }}>
                                    {project.impact.metric}
                                </div>
                                <ImpactDescription>{project.impact.description}</ImpactDescription>
                            </div>
                        </ImpactMetric>
                    </div>

                    <HeroImage>
                        <div style={{
                            width: '100%',
                            height: '400px',
                            background: 'linear-gradient(135deg, rgba(80, 255, 108, 0.1) 0%, rgba(80, 255, 108, 0.05) 100%)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(80, 255, 108, 0.2)',
                            fontSize: '48px'
                        }}>
                            {project.highlights[0]?.icon || '🚀'}
                        </div>
                    </HeroImage>
                </HeroSection>

                <DetailsSection>
                    <SectionTitle>Destaques do Projeto</SectionTitle>
                    <HighlightsGrid>
                        {project.highlights.map((highlight, index) => (
                            <HighlightCard key={index}>
                                <HighlightIcon>{highlight.icon}</HighlightIcon>
                                <HighlightTitle>{highlight.title}</HighlightTitle>
                                <HighlightDescription>{highlight.description}</HighlightDescription>
                            </HighlightCard>
                        ))}
                    </HighlightsGrid>
                </DetailsSection>

                <DetailsSection>
                    <SectionTitle>Stack Tecnológica</SectionTitle>
                    <TechStack>
                        {project.technologies.map((tech, index) => (
                            <TechItem key={index}>{tech}</TechItem>
                        ))}
                    </TechStack>
                </DetailsSection>

                <TimelineSection>
                    <SectionTitle>Timeline de Desenvolvimento</SectionTitle>
                    {project.timeline.map((phase, index) => (
                        <TimelineItem key={index}>
                            <TimelinePhase>{phase.phase}</TimelinePhase>
                            <TimelineDuration>{phase.duration}</TimelineDuration>
                            <TimelineDescription>{phase.description}</TimelineDescription>
                        </TimelineItem>
                    ))}
                </TimelineSection>

                <ActionSection>
                    <ActionButton onClick={handleViewProject}>
                        Ver no GitHub →
                    </ActionButton>
                    {onNext && (
                        <ActionButton onClick={onNext} style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                            Próximo Projeto
                        </ActionButton>
                    )}
                </ActionSection>
            </ProjectContent>
        </ProjectContainer>
    );
};

export default ProjectDetail;
