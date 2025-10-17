import styled, { keyframes } from 'styled-components';
import { theme } from '../theme/theme';

interface AboutContainerProps {
    isVisible: boolean;
}

interface SkillsCarouselProps {
    skillIndex: number;
    isHardSkills: boolean;
}

interface NavigationDotProps {
    active: boolean;
}

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutToRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const skillTransition = keyframes`
  0% {
    transform: perspective(1000px) rotateY(-15deg) translateX(-20px);
    opacity: 0;
  }
  50% {
    transform: perspective(1000px) rotateY(0deg) translateX(0px);
    opacity: 0.7;
  }
  100% {
    transform: perspective(1000px) rotateY(0deg) translateX(0px);
    opacity: 1;
  }
`;

export const AboutContainer = styled.div<AboutContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  animation: ${props => props.isVisible ? slideInFromRight : slideOutToRight} 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 1000;
  overflow: hidden;
`;

export const AboutContent = styled.div`
  flex: 1;
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 24px;
  flex-shrink: 0;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 32px;
  left: 32px;
  background: none;
  border: 2px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  padding: 12px 20px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.background};
    transform: translateX(-5px);
  }

  @media (max-width: 768px) {
    top: 20px;
    left: 20px;
    padding: 10px 16px;
    font-size: 12px;
  }
`;

export const AboutTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 4.5rem);
  font-weight: 700;
  color: ${theme.colors.primary};
  margin: 60px 0 24px;
  text-align: center;
  letter-spacing: -0.02em;
  line-height: 1.1;

  @media (max-width: 768px) {
    margin: 80px 0 20px;
  }
`;

export const AboutDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: ${theme.colors.text};
  text-align: center;
  max-width: 600px;
  margin: 0 auto 24px;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SkillsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  touch-action: pan-y;
  user-select: none;
`;

export const SkillsCarousel = styled.div<SkillsCarouselProps>`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${skillTransition} 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  transform: perspective(1000px) ${props => props.isHardSkills ? 'rotateX(0deg)' : 'rotateX(5deg)'};
  transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const SkillSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 800px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: 16px;
  position: relative;
  opacity: 0.9;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${theme.colors.primary}, transparent);
    border-radius: 2px;
  }
`;

export const SectionSubtitle = styled.h3`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 400;
  color: ${theme.colors.text};
  margin-bottom: 32px;
  opacity: 0.7;
  letter-spacing: 0.02em;
`;

export const SkillCard = styled.div`
  background: linear-gradient(135deg, rgba(80, 255, 108, 0.1) 0%, rgba(80, 255, 108, 0.05) 100%);
  border: 2px solid ${theme.colors.primary};
  padding: 40px 60px;
  border-radius: 24px;
  color: ${theme.colors.text};
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 600;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(80, 255, 108, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg,
      transparent,
      rgba(80, 255, 108, 0.1),
      transparent,
      rgba(80, 255, 108, 0.1),
      transparent
    );
    animation: rotate 8s linear infinite;
    opacity: 0.5;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 2px;
    background: ${theme.colors.background};
    border-radius: 22px;
    z-index: -1;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    padding: 30px 40px;
  }
`;

export const NavigationDots = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 32px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const NavigationDot = styled.button<NavigationDotProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? theme.colors.primary : 'rgba(80, 255, 108, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    background: ${theme.colors.primary};
    transform: scale(1.2);
  }

  ${props => props.active && `
    &::after {
      content: '';
      position: absolute;
      inset: -4px;
      border: 2px solid ${theme.colors.primary};
      border-radius: 50%;
      opacity: 0.5;
    }
  `}
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: auto;
  padding-top: 32px;
  border-top: 1px solid rgba(80, 255, 108, 0.2);
  flex-shrink: 0;

  @media (max-width: 768px) {
    gap: 20px;
    padding-top: 24px;
  }
`;

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  background: ${theme.colors.primary};
  color: ${theme.colors.background};
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(80, 255, 108, 0.4);
    
    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 14px 24px;
    font-size: 14px;
  }
`;

export const NavigationButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: 2px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  padding: 14px 28px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${theme.colors.primary};
    transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: -1;
  }

  &:hover {
    color: ${theme.colors.background};
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(80, 255, 108, 0.3);
    
    &::before {
      left: 0;
    }

    span {
      transform: translateX(5px);
    }
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 14px;
  }
`;
