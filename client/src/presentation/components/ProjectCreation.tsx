import React, { useState, useEffect, useRef } from 'react';
import { ProjectProcessesEntity } from '../../domain/entities/ProjectProcesses';
import { GetProjectProcessesInfoUseCase } from '../../application/usecases/GetProjectProcessesInfoUseCase';
import { InMemoryProjectProcessesRepository } from '../../infrastructure/repositories/InMemoryProjectProcessesRepository';
import {
    ProjectCreationContainer,
    ProjectCreationContent,
    LeftSection,
    RightSection,
    BackButton,
    MainTitle,
    MainDescription,
    ContactText,
    ContactButton,
    TimelineContainer,
    TimelineLine,
    TimelineStep,
    StepDot,
    StepTitle,
    StepDescription,
    StepDuration,
} from './ProjectCreation.styles';

interface ProjectCreationProps {
    isVisible: boolean;
    onClose: () => void;
    onNext?: () => void;
}

const ProjectCreation: React.FC<ProjectCreationProps> = ({ isVisible, onClose, onNext }) => {
    const [projectProcessesInfo, setProjectProcessesInfo] = useState<ProjectProcessesEntity | null>(null);
    const [lineHeight, setLineHeight] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    // Detecta se está no mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Lógica do scroll dinâmico para mobile
    useEffect(() => {
        if (!isMobile || !isVisible) return;

        const handleScroll = () => {
            if (!contentRef.current || !timelineRef.current) return;

            const scrollElement = contentRef.current;
            const timeline = timelineRef.current;

            const scrollTop = scrollElement.scrollTop;
            const scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
            const timelineHeight = timeline.clientHeight;

            // Calcula a porcentagem do scroll (0 a 1)
            const scrollPercent = Math.min(scrollTop / scrollHeight, 1);

            // Define a altura da linha baseada no scroll
            const newHeight = scrollPercent * timelineHeight;
            setLineHeight(newHeight);
        };

        const scrollElement = contentRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', handleScroll);
            // Chama uma vez para definir estado inicial
            handleScroll();

            return () => scrollElement.removeEventListener('scroll', handleScroll);
        }
    }, [isMobile, isVisible]);

    useEffect(() => {
        const loadProjectProcessesInfo = async () => {
            const repository = new InMemoryProjectProcessesRepository();
            const useCase = new GetProjectProcessesInfoUseCase(repository);
            const info = await useCase.execute();
            setProjectProcessesInfo(info);
        };

        if (isVisible) {
            loadProjectProcessesInfo();
        }
    }, [isVisible]);

    if (!isVisible || !projectProcessesInfo) {
        return null;
    }

    const steps = projectProcessesInfo.getStepsByOrder();

    return (
        <ProjectCreationContainer isVisible={isVisible}>
            <BackButton onClick={onClose}>
                ← Back
            </BackButton>

            <ProjectCreationContent ref={contentRef}>
                <LeftSection>
                    <MainTitle>{projectProcessesInfo.title}</MainTitle>
                    <MainDescription>
                        {projectProcessesInfo.description}
                    </MainDescription>

                    <ContactText>
                        {projectProcessesInfo.contactText} 🚀
                    </ContactText>

                    <ContactButton href={projectProcessesInfo.contactLink}>
                        Let's talk ↗
                    </ContactButton>
                </LeftSection>

                <RightSection>
                    <TimelineContainer ref={timelineRef}>
                        <TimelineLine dynamicHeight={isMobile ? lineHeight : undefined} />
                        {steps.map((step, index) => (
                            <TimelineStep key={step.id} index={index}>
                                <StepDot />
                                <StepTitle>{step.title}</StepTitle>
                                <StepDescription>{step.description}</StepDescription>
                                {step.duration && (
                                    <StepDuration>⏱️ {step.duration}</StepDuration>
                                )}
                            </TimelineStep>
                        ))}
                    </TimelineContainer>
                </RightSection>
            </ProjectCreationContent>
        </ProjectCreationContainer>
    );
};

export default ProjectCreation;
