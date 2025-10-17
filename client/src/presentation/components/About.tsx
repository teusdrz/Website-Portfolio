import React, { useState, useEffect, useRef } from 'react';
import { AboutInfoEntity } from '../../domain/entities/AboutInfo';
import { GetAboutInfoUseCase } from '../../application/usecases/GetAboutInfoUseCase';
import { InMemoryAboutInfoRepository } from '../../infrastructure/repositories/InMemoryAboutInfoRepository';
import {
  AboutContainer,
  AboutContent,
  AboutHeader,
  AboutTitle,
  AboutDescription,
  BackButton,
  SkillsContainer,
  SkillsCarousel,
  SkillSection,
  SectionTitle,
  SkillText,
  ContactSection,
  ContactButton,
} from './About.styles';

interface AboutProps {
  isVisible: boolean;
  onClose: () => void;
}

const About: React.FC<AboutProps> = ({ isVisible, onClose }) => {
  const [aboutInfo, setAboutInfo] = useState<AboutInfoEntity | null>(null);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isHardSkills, setIsHardSkills] = useState(true);
  const [isTitleChanging, setIsTitleChanging] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const accumulatedScroll = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const loadAboutInfo = async () => {
      const repository = new InMemoryAboutInfoRepository();
      const useCase = new GetAboutInfoUseCase(repository);
      const info = await useCase.execute();
      setAboutInfo(info);
    };

    if (isVisible) {
      loadAboutInfo();
    }
  }, [isVisible]);

  const currentSkills = isHardSkills ? aboutInfo?.hardSkills || [] : aboutInfo?.softSkills || [];
  const maxIndex = currentSkills.length - 1;

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();

    // Limita a quantidade de scroll por evento (máximo 15px por scroll)
    const limitedDelta = Math.max(-15, Math.min(15, e.deltaY));

    // Acumula o scroll gradualmente
    accumulatedScroll.current += limitedDelta;

    // Threshold maior para movimento mais calmo (100px)
    const scrollThreshold = 100;

    // Limita o acumulado para não passar muito do threshold
    accumulatedScroll.current = Math.max(-scrollThreshold * 1.2, Math.min(scrollThreshold * 1.2, accumulatedScroll.current));

    // Calcula offset baseado no scroll acumulado (máximo 50px de movimento)
    const progress = Math.max(-1, Math.min(1, accumulatedScroll.current / scrollThreshold));
    setScrollOffset(progress * 50); // -50 a 50px de offset (mais sutil)

    // Só muda skill quando atinge o threshold completo
    if (Math.abs(accumulatedScroll.current) >= scrollThreshold) {
      if (accumulatedScroll.current > 0) {
        // Scroll para baixo
        if (currentSkillIndex < maxIndex) {
          setCurrentSkillIndex(currentSkillIndex + 1);
        } else if (isHardSkills) {
          // Muda para soft skills
          setIsTitleChanging(true);
          setTimeout(() => {
            setIsHardSkills(false);
            setCurrentSkillIndex(0);
          }, 200);
          setTimeout(() => {
            setIsTitleChanging(false);
          }, 600);
        }
      } else {
        // Scroll para cima
        if (currentSkillIndex > 0) {
          setCurrentSkillIndex(currentSkillIndex - 1);
        } else if (!isHardSkills) {
          // Volta para hard skills
          setIsTitleChanging(true);
          setTimeout(() => {
            setIsHardSkills(true);
            setCurrentSkillIndex((aboutInfo?.hardSkills || []).length - 1);
          }, 200);
          setTimeout(() => {
            setIsTitleChanging(false);
          }, 600);
        }
      }

      // Reset
      accumulatedScroll.current = 0;
      setScrollOffset(0);
    } else {
      // Auto-reset se parar de scrollar por 500ms
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        accumulatedScroll.current = 0;
        setScrollOffset(0);
      }, 500);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndY = e.changedTouches[0].clientY;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - touchEndY;
    const deltaX = touchStartX.current - touchEndX;

    // Threshold maior para touch também (80px)
    if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 80) {
      if (deltaY > 0) {
        // Swipe para cima (scroll para baixo)
        if (currentSkillIndex < maxIndex) {
          setCurrentSkillIndex(currentSkillIndex + 1);
        } else if (isHardSkills) {
          setIsTitleChanging(true);
          setTimeout(() => {
            setIsHardSkills(false);
            setCurrentSkillIndex(0);
          }, 200);
          setTimeout(() => {
            setIsTitleChanging(false);
          }, 600);
        }
      } else {
        // Swipe para baixo (scroll para cima)
        if (currentSkillIndex > 0) {
          setCurrentSkillIndex(currentSkillIndex - 1);
        } else if (!isHardSkills) {
          setIsTitleChanging(true);
          setTimeout(() => {
            setIsHardSkills(true);
            setCurrentSkillIndex((aboutInfo?.hardSkills || []).length - 1);
          }, 200);
          setTimeout(() => {
            setIsTitleChanging(false);
          }, 600);
        }
      }
    }

    // Reset no touch também
    accumulatedScroll.current = 0;
    setScrollOffset(0);
  };

  if (!isVisible || !aboutInfo) {
    return null;
  }

  return (
    <AboutContainer isVisible={isVisible}>
      <AboutContent>
        <AboutHeader>
          <BackButton onClick={onClose}>
            ← Back
          </BackButton>
          <AboutTitle>About Me</AboutTitle>
          <AboutDescription>
            {aboutInfo.description}
          </AboutDescription>
        </AboutHeader>

        <SkillsContainer
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <SkillsCarousel
            ref={carouselRef}
            skillIndex={currentSkillIndex}
            isHardSkills={isHardSkills}
            scrollOffset={scrollOffset}
          >
            <SkillSection>
              <SectionTitle isChanging={isTitleChanging}>
                {isHardSkills ? 'Hard Skills' : 'Soft Skills'}
              </SectionTitle>
              <SkillText skillKey={`${isHardSkills ? 'hard' : 'soft'}-${currentSkillIndex}`} key={`${isHardSkills ? 'hard' : 'soft'}-${currentSkillIndex}`}>
                {currentSkills[currentSkillIndex] || ''}
              </SkillText>
            </SkillSection>
          </SkillsCarousel>

        </SkillsContainer>

        <ContactSection>
          <ContactButton href="mailto:matheusviniciusdrs5555@gmail.com">
            📧 Vamos conversar!
          </ContactButton>
        </ContactSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
