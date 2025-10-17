import styled from 'styled-components';
import { theme } from '../theme/theme';

export const NavigationContainer = styled.div`
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 1001;
  
  @media (max-width: 768px) {
    bottom: 20px;
    gap: 12px;
  }
`;

export const NavigationButton = styled.button<{ disabled?: boolean }>`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: ${props => props.disabled ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.6)'};
  width: 36px;
  height: 36px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  font-size: 14px;
  
  &:hover {
    ${props => !props.disabled && `
      color: ${theme.colors.primary};
      border-color: rgba(80, 255, 108, 0.3);
      background: rgba(0, 0, 0, 0.3);
    `}
  }
  
  &:active {
    ${props => !props.disabled && `
      transform: scale(0.95);
    `}
  }
  
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 12px;
  }
`;

export const PageIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
`;

export const Dot = styled.div<{ active?: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${props => props.active ? theme.colors.primary : 'rgba(255, 255, 255, 0.4)'};
  transition: all 0.2s ease;
  
  @media (max-width: 768px) {
    width: 5px;
    height: 5px;
  }
`;
