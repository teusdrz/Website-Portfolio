import React, { useState, useEffect } from 'react';
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
  SkillsSection,
  SectionTitle,
  SkillGrid,
  SkillItem,
  ContactSection,
  ContactButton,
  NavigationButton,
} from './About.styles';

interface AboutProps {
  isVisible: boolean;
  onClose: () => void;
  onNext: () => void;
}

const About: React.FC<AboutProps> = ({ isVisible, onClose, onNext }) => {
  const [aboutInfo, setAboutInfo] = useState<AboutInfoEntity | null>(null);

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

        <SkillsSection>
          <SectionTitle>Hard Skills</SectionTitle>
          <SkillGrid>
            {aboutInfo.hardSkills.map((skill: string, index: number) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillGrid>
        </SkillsSection>

        <SkillsSection>
          <SectionTitle>Soft Skills</SectionTitle>
          <SkillGrid>
            {aboutInfo.softSkills.map((skill: string, index: number) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillGrid>
        </SkillsSection>

        <ContactSection>
          <ContactButton href="mailto:matheusviniciusdrs5555@gmail.com">
            📧 Vamos conversar!
          </ContactButton>
          <NavigationButton onClick={onNext}>
            Carreira
            <span style={{
              marginLeft: '12px',
              fontSize: '16px',
              opacity: 0.6,
              fontWeight: '300',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
            }}>
              →
            </span>
          </NavigationButton>
        </ContactSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
