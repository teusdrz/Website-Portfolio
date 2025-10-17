import styled from 'styled-components';
import { theme } from '../theme/theme';

export const ProjectContainer = styled.div<{ isVisible: boolean }>`
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
  transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(30px)'};
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  overflow: hidden;
`;

export const ProjectContent = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: ${theme.spacing.lg} ${theme.spacing.md} ${theme.spacing.xl};
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  
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
    padding: ${theme.spacing.md};
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: ${theme.spacing.lg};
  left: ${theme.spacing.lg};
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.8);
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.lg};
  font-size: ${theme.typography.sizes.small};
  font-weight: ${theme.typography.weights.semibold};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.5);
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }
  
  @media (max-width: 768px) {
    top: ${theme.spacing.md};
    left: ${theme.spacing.md};
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
  }
`;

export const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xl};
  align-items: center;
  margin-bottom: ${theme.spacing.xl};
  min-height: 60vh;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
    min-height: auto;
  }
`;

export const ProjectTitle = styled.h1`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: ${theme.typography.weights.semibold};
  margin-bottom: ${theme.spacing.sm};
  background: linear-gradient(135deg, ${theme.colors.text.primary} 0%, rgba(255, 255, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
`;

export const ProjectSubtitle = styled.h2`
  font-size: ${theme.typography.sizes.large};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.md};
  font-weight: ${theme.typography.weights.semibold};
`;

export const ProjectDescription = styled.p`
  font-size: ${theme.typography.sizes.medium};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.lg};
  max-width: 90%;
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 400px;
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  
  @media (max-width: 1024px) {
    height: 300px;
    order: -1;
  }
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

export const ImpactMetric = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md};
  background: rgba(80, 255, 108, 0.1);
  border: 1px solid rgba(80, 255, 108, 0.2);
  border-radius: ${theme.borderRadius.lg};
  margin-top: ${theme.spacing.lg};
  max-width: 400px;
`;

export const ImpactValue = styled.div`
  font-size: 3rem;
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.primary};
  line-height: 1;
`;

export const ImpactDescription = styled.div`
  font-size: ${theme.typography.sizes.small};
  color: ${theme.colors.text.secondary};
  line-height: 1.4;
`;

export const DetailsSection = styled.section`
  margin-bottom: ${theme.spacing.xl};
`;

export const SectionTitle = styled.h3`
  font-size: ${theme.typography.sizes.large};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  
  &:before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 24px;
    background: ${theme.colors.primary};
    margin-right: ${theme.spacing.sm};
    border-radius: 2px;
    vertical-align: middle;
  }
`;

export const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.md};
  }
`;

export const HighlightCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(80, 255, 108, 0.3);
    transform: translateY(-4px);
  }
`;

export const HighlightIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${theme.spacing.md};
`;

export const HighlightTitle = styled.h4`
  font-size: ${theme.typography.sizes.medium};
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

export const HighlightDescription = styled.p`
  font-size: ${theme.typography.sizes.small};
  color: ${theme.colors.text.secondary};
  line-height: 1.5;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

export const TechItem = styled.span`
  background: rgba(80, 255, 108, 0.1);
  border: 1px solid rgba(80, 255, 108, 0.2);
  color: ${theme.colors.primary};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.sizes.small};
  font-weight: ${theme.typography.weights.regular};
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(80, 255, 108, 0.15);
    border-color: rgba(80, 255, 108, 0.4);
  }
`;

export const TimelineSection = styled.section`
  margin-bottom: ${theme.spacing.xl};
`;

export const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 200px 120px 1fr;
  gap: ${theme.spacing.md};
  align-items: start;
  padding: ${theme.spacing.md} 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xs};
  }
`;

export const TimelinePhase = styled.div`
  font-weight: ${theme.typography.weights.semibold};
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.sizes.medium};
`;

export const TimelineDuration = styled.div`
  color: ${theme.colors.primary};
  font-size: ${theme.typography.sizes.small};
  font-weight: ${theme.typography.weights.regular};
  background: rgba(80, 255, 108, 0.1);
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  text-align: center;
  
  @media (max-width: 768px) {
    width: fit-content;
  }
`;

export const TimelineDescription = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.sizes.small};
  line-height: 1.5;
`;

export const ActionSection = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ActionButton = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.background};
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
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
