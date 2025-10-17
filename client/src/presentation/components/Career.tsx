import React, { useState, useEffect, useRef } from 'react';
import { CareerEntity } from '../../domain/entities/Career';
import { GetCareerInfoUseCase } from '../../application/usecases/GetCareerInfoUseCase';
import { InMemoryCareerRepository } from '../../infrastructure/repositories/InMemoryCareerRepository';
import {
  CareerContainer,
  CareerContent,
  CareerHeader,
  CareerTitle,
  CareerSubtitle,
  BackButton,
  TimelineContainer,
  Timeline,
  TimelineYear,
  TimelineCircle,
  TimelineLine,
  YearLabel,
  ModalOverlay,
  ModalContent,
  ModalCard,
  ModalCloseButton,
  CompanyName,
  Position,
  Period,
  Description,
  TechnologiesContainer,
  TechnologiesTitle,
  TechGrid,
  TechTag,
  AchievementsList,
  AchievementItem,
} from './Career.styles';

interface CareerProps {
  isVisible: boolean;
  onClose: () => void;
  onNext: () => void;
}

const Career: React.FC<CareerProps> = ({ isVisible, onClose, onNext }) => {
  const [careerInfo, setCareerInfo] = useState<CareerEntity | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);
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
    const loadCareerInfo = async () => {
      const repository = new InMemoryCareerRepository();
      const useCase = new GetCareerInfoUseCase(repository);
      const info = await useCase.execute();
      setCareerInfo(info);
    };

    if (isVisible) {
      loadCareerInfo();
    }
  }, [isVisible]);

  const handleCircleClick = (experience: any) => {
    setSelectedExperience(experience);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setTimeout(() => setSelectedExperience(null), 300);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  if (!isVisible || !careerInfo) {
    return null;
  }

  const timelineData = careerInfo.getTimelineData();

  return (
    <CareerContainer>
      <CareerContent ref={contentRef}>
        <CareerHeader>
          <div>
            <CareerTitle>Professional Career</CareerTitle>
            <CareerSubtitle>My professional journey</CareerSubtitle>
          </div>
          <BackButton onClick={onClose}>
            ← Back
          </BackButton>
        </CareerHeader>

        <TimelineContainer ref={timelineRef}>
          <Timeline>
            <TimelineLine dynamicHeight={isMobile ? lineHeight : undefined} />
            {timelineData.map((experience, index) => (
              <TimelineYear key={experience.id} index={index}>
                <TimelineCircle
                  featured={experience.featured}
                  index={index}
                  onClick={() => handleCircleClick(experience)}
                />
                <div>
                  <YearLabel index={index}>{experience.year}</YearLabel>
                  <div style={{ marginTop: '8px', color: '#ffffff', fontSize: '14px' }}>
                    {experience.company}
                  </div>
                  <div style={{ color: '#50ff6c', fontSize: '12px' }}>
                    {experience.position}
                  </div>
                </div>
              </TimelineYear>
            ))}
          </Timeline>
        </TimelineContainer>

        {/* Modal */}
        {modalVisible && (
          <ModalOverlay visible={modalVisible} onClick={handleOverlayClick}>
            <ModalContent visible={modalVisible}>
              <ModalCard>
                <ModalCloseButton onClick={handleCloseModal}>×</ModalCloseButton>

                {selectedExperience && (
                  <>
                    <CompanyName>{selectedExperience.company}</CompanyName>
                    <Position>{selectedExperience.position}</Position>
                    <Period>{selectedExperience.period}</Period>
                    <Description>{selectedExperience.description}</Description>

                    {selectedExperience.technologies && selectedExperience.technologies.length > 0 && (
                      <TechnologiesContainer>
                        <TechnologiesTitle>Technologies Used</TechnologiesTitle>
                        <TechGrid>
                          {selectedExperience.technologies.map((tech: string, index: number) => (
                            <TechTag key={index}>{tech}</TechTag>
                          ))}
                        </TechGrid>
                      </TechnologiesContainer>
                    )}

                    {selectedExperience.achievements && selectedExperience.achievements.length > 0 && (
                      <div>
                        <TechnologiesTitle>Key Achievements</TechnologiesTitle>
                        <AchievementsList>
                          {selectedExperience.achievements.map((achievement: string, index: number) => (
                            <AchievementItem key={index}>{achievement}</AchievementItem>
                          ))}
                        </AchievementsList>
                      </div>
                    )}
                  </>
                )}
              </ModalCard>
            </ModalContent>
          </ModalOverlay>
        )}
      </CareerContent>
    </CareerContainer>
  );
};

export default Career;
