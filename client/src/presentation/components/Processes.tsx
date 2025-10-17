import React, { useState, useEffect, useRef } from 'react';
import { ProcessesEntity } from '../../domain/entities/Processes';
import { GetProcessesInfoUseCase } from '../../application/usecases/GetProcessesInfoUseCase';
import { InMemoryProcessesRepository } from '../../infrastructure/repositories/InMemoryProcessesRepository';
import {
    ProcessesContainer,
    ProcessesContent,
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
} from './Processes.styles';

interface ProcessesProps {
    isVisible: boolean;
    onClose: () => void;
    onNext?: () => void;
}

const Processes: React.FC<ProcessesProps> = ({ isVisible, onClose, onNext }) => {
    const [processesInfo, setProcessesInfo] = useState<ProcessesEntity | null>(null);
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
        const loadProcessesInfo = async () => {
            const repository = new InMemoryProcessesRepository();
            const useCase = new GetProcessesInfoUseCase(repository);
            const info = await useCase.execute();
            setProcessesInfo(info);
        };

        if (isVisible) {
            loadProcessesInfo();
        }
    }, [isVisible]);

    if (!isVisible || !processesInfo) {
        return null;
    }

    const steps = processesInfo.getStepsByOrder();

    return (
        <ProcessesContainer isVisible={isVisible}>
            <BackButton onClick={onClose}>
                ← Back
            </BackButton>

            <ProcessesContent ref={contentRef}>
                <LeftSection>
                    <MainTitle>{processesInfo.title}</MainTitle>
                    <MainDescription>
                        {processesInfo.description}
                    </MainDescription>

                    <ContactText>
                        {processesInfo.contactText} 😊
                    </ContactText>

                    <ContactButton href={processesInfo.contactLink}>
                        Get in touch ↗
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
                            </TimelineStep>
                        ))}
                    </TimelineContainer>
                </RightSection>
            </ProcessesContent>
        </ProcessesContainer>
    );
};

export default Processes;
