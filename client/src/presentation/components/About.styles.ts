import styled from 'styled-components';
import { theme } from '../theme/theme';

export const AboutContainer = styled.div<{ isVisible: boolean }>`
  min-height: 100vh;
  background-color: ${theme.colors.background};
  color: ${theme.colors.text.primary};
  font-family: ${theme.typography.fontFamily};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  padding: ${theme.spacing.xl} ${theme.spacing.md};
  overflow-y: auto;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(30px)'};
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.lg} ${theme.spacing.sm};
  }
`;

export const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xxl};
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

export const AboutHeader = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  opacity: 1;
  transform: translateY(0);
  transition: all 0.6s ease-out;
  transition-delay: 0.3s;
`;

export const AboutTitle = styled.h1`
  font-size: ${theme.typography.sizes.large};
  font-weight: ${theme.typography.weights.semibold};
  line-height: ${theme.typography.lineHeights.large};
  margin: 0 0 ${theme.spacing.md} 0;
  background: linear-gradient(135deg, ${theme.colors.primary}, #00D4AA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const AboutDescription = styled.p`
  font-size: ${theme.typography.sizes.medium};
  line-height: ${theme.typography.lineHeights.medium};
  color: ${theme.colors.text.secondary};
  margin: 0;
  max-width: 800px;
  margin: 0 auto;
`;

export const BackButton = styled.button`
  position: absolute;
  top: ${theme.spacing.xl};
  left: ${theme.spacing.xl};
  background: none;
  border: 2px solid ${theme.colors.border};
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.sizes.small};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  
  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
    transform: translateX(-5px);
  }
  
  @media (max-width: 768px) {
    top: ${theme.spacing.lg};
    left: ${theme.spacing.lg};
  }
`;

export const SkillsSection = styled.div`
  opacity: 1;
  transform: translateY(0);
  transition: all 0.6s ease-out;
  transition-delay: 0.5s;
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: ${theme.typography.weights.semibold};
  margin: 0 0 ${theme.spacing.lg} 0;
  color: ${theme.colors.text.primary};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, ${theme.colors.primary}, #00D4AA);
    border-radius: 2px;
  }
`;

export const SkillGrid = styled.div`
  display: grid;
  gap: ${theme.spacing.sm};
`;

export const SkillItem = styled.div`
  background: linear-gradient(135deg, rgba(80, 255, 108, 0.1), rgba(0, 212, 170, 0.1));
  border: 1px solid rgba(80, 255, 108, 0.2);
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.sizes.small};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    border-color: ${theme.colors.primary};
    box-shadow: 0 8px 25px rgba(80, 255, 108, 0.2);
  }
`;

export const HighlightsSection = styled.div`
  grid-column: 1 / -1;
  opacity: 1;
  transform: translateY(0);
  transition: all 0.6s ease-out;
  transition-delay: 0.7s;
  margin-top: ${theme.spacing.xl};
`;

export const HighlightItem = styled.div`
  background: rgba(80, 255, 108, 0.05);
  border-left: 4px solid ${theme.colors.primary};
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.lg};
  border-radius: 0 ${theme.borderRadius.sm} ${theme.borderRadius.sm} 0;
  font-size: ${theme.typography.sizes.small};
  line-height: ${theme.typography.lineHeights.medium};
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(80, 255, 108, 0.08);
    transform: translateX(10px);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContactSection = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  margin-top: ${theme.spacing.xxl};
  opacity: 1;
  transform: translateY(0);
  transition: all 0.6s ease-out;
  transition-delay: 0.9s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.md};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
  }
`;

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: linear-gradient(135deg, ${theme.colors.primary}, #00D4AA);
  color: ${theme.colors.background};
  text-decoration: none;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.sizes.small};
  font-weight: ${theme.typography.weights.semibold};
  font-family: ${theme.typography.fontFamily};
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(80, 255, 108, 0.4);
  }
`;

export const NavigationButton = styled.button`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: ${theme.colors.text.secondary};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  font-size: ${theme.typography.sizes.small};
  font-weight: ${theme.typography.weights.semibold};
  font-family: ${theme.typography.fontFamily};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  min-width: 120px;
  
  span {
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(80, 255, 108, 0.08), transparent);
    transition: left 0.8s ease;
  }
  
  &:hover {
    border-color: rgba(80, 255, 108, 0.2);
    color: ${theme.colors.text.primary};
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(80, 255, 108, 0.1);
    
    span {
      transform: translateX(6px);
      opacity: 0.9 !important;
    }
    
    &:before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0px);
    transition: transform 0.1s ease;
  }
`;
