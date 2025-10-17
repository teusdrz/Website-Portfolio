import styled from 'styled-components';
import { theme } from '../theme/theme';

export const Container = styled.div<{ isHidden?: boolean }>`
  min-height: 100vh;
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md};
  color: ${theme.colors.text.primary};
  font-family: ${theme.typography.fontFamily};
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: ${props => props.isHidden ? 'translateX(-50px)' : 'translateX(0)'};
  opacity: ${props => props.isHidden ? 0 : 1};
  pointer-events: ${props => props.isHidden ? 'none' : 'auto'};
`;

export const Avatar = styled.img`
  width: 145px;
  height: 145px;
  border-radius: ${theme.borderRadius.full};
  margin-bottom: ${theme.spacing.xl};
  object-fit: cover;
`;

export const Name = styled.h1`
  font-size: ${theme.typography.sizes.large};
  font-weight: ${theme.typography.weights.semibold};
  line-height: ${theme.typography.lineHeights.large};
  margin: 0 0 ${theme.spacing.sm} 0;
  text-align: center;
`;

export const Title = styled.p`
  font-size: ${theme.typography.sizes.medium};
  font-weight: ${theme.typography.weights.regular};
  line-height: ${theme.typography.lineHeights.medium};
  color: ${theme.colors.text.secondary};
  margin: 0 0 ${theme.spacing.xxl} 0;
  text-align: center;
`;

export const StartButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  border: none;
  padding: 16px 32px;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.sizes.small};
  font-weight: ${theme.typography.weights.semibold};
  font-family: ${theme.typography.fontFamily};
  cursor: pointer;
  margin-bottom: ${theme.spacing.xxl};
  transition: all 0.3s ease;
  min-width: 166px;
  
  &:hover {
    box-shadow: ${theme.shadows.button};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.xxl};
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${theme.spacing.lg};
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.text.primary};
  text-decoration: none;
  font-size: ${theme.typography.sizes.small};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${theme.colors.primary};
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const LoadingContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.text.primary};
  font-family: ${theme.typography.fontFamily};
`;

export const ErrorContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.md};
  color: ${theme.colors.text.primary};
  font-family: ${theme.typography.fontFamily};
  text-align: center;
  
  h2 {
    margin-bottom: ${theme.spacing.md};
    color: #FF6B6B;
  }
`;
