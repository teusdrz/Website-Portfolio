// Final page styled components
import styled from 'styled-components';
import { theme } from '../theme/theme';

export const FinalContainer = styled.div<{ isVisible: boolean }>`
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
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(80, 255, 108, 0.3);
    border-radius: 3px;
    
    &:hover {
      background: rgba(80, 255, 108, 0.5);
    }
  }
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.lg} ${theme.spacing.sm};
  }
`;

export const FinalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xl};
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(80, 255, 108, 0.5);
  }
  
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    margin-bottom: ${theme.spacing.lg};
  }
`;

export const ThankYouMessage = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

export const FinalTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: ${theme.typography.weights.semibold};
  margin-bottom: ${theme.spacing.md};
  background: linear-gradient(135deg, ${theme.colors.text.primary} 0%, rgba(255, 255, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
`;

export const FinalSubtitle = styled.h2`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.lg};
  font-weight: ${theme.typography.weights.semibold};
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  width: 100%;
`;

export const ContactTitle = styled.h3`
  font-size: ${theme.typography.sizes.large};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
  font-weight: ${theme.typography.weights.semibold};
`;

export const ContactDescription = styled.p`
  font-size: ${theme.typography.sizes.medium};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.lg};
  max-width: 600px;
  text-align: center;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: ${theme.spacing.md};
    flex-direction: column;
    align-items: center;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.lg};
  color: ${theme.colors.text.secondary};
  text-decoration: none;
  font-size: ${theme.typography.sizes.medium};
  font-weight: ${theme.typography.weights.semibold};
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(80, 255, 108, 0.1);
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
    transform: translateY(-2px);
  }
  
  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-size: ${theme.typography.sizes.small};
    min-width: 250px;
    justify-content: center;
  }
`;

export const BackToTopButton = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.background};
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  font-size: ${theme.typography.sizes.medium};
  font-weight: ${theme.typography.weights.semibold};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(80, 255, 108, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(80, 255, 108, 0.3);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    font-size: ${theme.typography.sizes.small};
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: ${theme.typography.sizes.medium};
  color: ${theme.colors.text.secondary};
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  
  h2 {
    font-size: ${theme.typography.sizes.large};
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing.sm};
  }
  
  p {
    font-size: ${theme.typography.sizes.medium};
    color: ${theme.colors.text.secondary};
  }
`;

export { };
