import styled, { keyframes } from 'styled-components';
import { theme } from '../theme/theme';

// Animação para crescimento da linha vertical (apenas desktop)
const timelineGrow = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    height: calc(100% - 80px);
    opacity: 1;
  }
`;

export const ProjectCreationContainer = styled.div<{ isVisible: boolean }>`
  min-height: 100vh;
  background: ${theme.colors.background};
  color: ${theme.colors.text.primary};
  font-family: ${theme.typography.fontFamily};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0) scale(1)' : 'translateY(-15px) scale(0.99)'};
  transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  overflow: hidden;
`;

export const ProjectCreationContent = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.02);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(80, 255, 108, 0.2);
    border-radius: 3px;
    backdrop-filter: blur(10px);
    
    &:hover {
      background: rgba(80, 255, 108, 0.3);
    }
  }
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  padding: 80px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50%;
  
  @media (max-width: 1024px) {
    padding: 60px 40px 40px;
    max-width: 100%;
  }
  
  @media (max-width: 768px) {
    padding: 40px 20px 20px;
    text-align: center;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  padding: 80px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 50%;
  
  @media (max-width: 1024px) {
    padding: 40px 40px 60px;
    max-width: 100%;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 40px;
  left: 40px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: ${theme.colors.text.secondary};
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  font-family: ${theme.typography.fontFamily};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  backdrop-filter: blur(15px);
  z-index: 10;
  
  &:hover {
    border-color: rgba(80, 255, 108, 0.3);
    color: ${theme.colors.text.primary};
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(-3px);
  }
  
  @media (max-width: 768px) {
    top: 20px;
    left: 20px;
    padding: 10px 16px;
    font-size: 12px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  margin-bottom: 24px;
  line-height: 1.1;
  
  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const MainDescription = styled.p`
  font-size: 18px;
  color: ${theme.colors.text.primary};
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 500px;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 24px;
    max-width: 100%;
  }
`;

export const ContactText = styled.p`
  font-size: 18px;
  color: ${theme.colors.text.primary};
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 500px;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 24px;
    max-width: 100%;
  }
`;

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: ${theme.colors.primary};
  color: ${theme.colors.background};
  text-decoration: none;
  padding: 18px 36px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  font-family: ${theme.typography.fontFamily};
  transition: all 0.3s ease;
  max-width: fit-content;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    background: rgba(80, 255, 108, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(80, 255, 108, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 16px 32px;
    font-size: 14px;
    align-self: center;
  }
`;

export const TimelineContainer = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0;
  padding-right: 40px;
  padding-top: 20px;
  
  @media (max-width: 1024px) {
    margin-top: 40px;
    padding-right: 0;
    padding-top: 20px;
  }
  
  @media (max-width: 768px) {
    padding-right: 0;
    padding-top: 20px;
  }
`;

export const TimelineLine = styled.div<{ dynamicHeight?: number }>`
  position: absolute;
  left: 16px;
  top: 50px;
  bottom: 30px;
  width: 2px;
  background: linear-gradient(
    180deg,
    ${theme.colors.primary} 0%,
    rgba(80, 255, 108, 0.6) 30%,
    rgba(80, 255, 108, 0.4) 70%,
    rgba(80, 255, 108, 0.2) 100%
  );
  border-radius: 1px;
  transform-origin: top center;
  
  /* Desktop: animação fixa */
  @media (min-width: 769px) {
    height: 0;
    animation: ${timelineGrow} 2.5s ease-out 0.5s forwards;
  }
  
  /* Mobile: altura dinâmica baseada no scroll */
  @media (max-width: 768px) {
    left: 20px;
    top: 50px;
    height: ${props => props.dynamicHeight ? `${props.dynamicHeight}px` : '0px'};
    transition: height 0.1s ease-out;
    bottom: auto;
  }
`;

export const TimelineStep = styled.div<{ index: number }>`
  position: relative;
  padding-left: 60px;
  margin-bottom: 36px;
  margin-top: ${props => props.index === 0 ? '20px' : '0'};
  opacity: 1;
  transform: translateX(0);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  transition-delay: ${props => props.index * 0.08}s;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    padding-left: 64px;
    margin-bottom: 32px;
  }
`;

export const StepDot = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  width: 14px;
  height: 14px;
  background: ${theme.colors.primary};
  border-radius: 50%;
  box-shadow: 
    0 0 20px rgba(80, 255, 108, 0.6),
    0 0 40px rgba(80, 255, 108, 0.3);
  border: 3px solid ${theme.colors.background};
  z-index: 2;
  
  @media (max-width: 768px) {
    left: 14px;
    width: 14px;
    height: 14px;
  }
`;

export const StepTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: 6px;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 4px;
  }
`;

export const StepDescription = styled.p`
  font-size: 16px;
  color: ${theme.colors.text.secondary};
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const StepDuration = styled.span`
  font-size: 14px;
  color: ${theme.colors.primary};
  font-weight: 500;
  margin-top: 4px;
  display: block;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  bottom: 40px;
  right: 40px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(80, 255, 108, 0.3);
  color: ${theme.colors.primary};
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  font-family: ${theme.typography.fontFamily};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  backdrop-filter: blur(15px);
  z-index: 10;
  
  &:hover {
    border-color: ${theme.colors.primary};
    background: rgba(80, 255, 108, 0.1);
    transform: translateX(3px);
  }
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    padding: 10px 16px;
    font-size: 12px;
  }
`;
