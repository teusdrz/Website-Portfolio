import styled, { keyframes } from 'styled-components';
import { theme } from '../theme/theme';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

interface ChatContainerProps {
    isVisible: boolean;
}

export const ChatContainer = styled.div<ChatContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ChatContent = styled.div`
  width: 90%;
  max-width: 600px;
  height: 90vh;
  max-height: 800px;
  background: ${theme.colors.background};
  border: 1px solid rgba(80, 255, 108, 0.1);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${slideUp} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(80, 255, 108, 0.1);

  @media (max-width: 768px) {
    width: 95%;
    height: 95vh;
    border-radius: 12px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(80, 255, 108, 0.1);
  color: ${theme.colors.primary};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 300;
  transition: all 0.2s ease;
  z-index: 1001;

  &:hover {
    background: rgba(80, 255, 108, 0.2);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
`;

export const ChatHeader = styled.div`
  padding: 24px 24px 16px;
  border-bottom: 1px solid rgba(80, 255, 108, 0.1);
  background: rgba(26, 26, 26, 0.5);
  
  @media (max-width: 768px) {
    padding: 20px 16px 12px;
  }
`;

export const ChatTitle = styled.h2`
  font-size: ${theme.typography.sizes.medium};
  color: ${theme.colors.primary};
  margin: 0 0 8px 0;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ChatSubtitle = styled.p`
  font-size: ${theme.typography.sizes.small};
  color: ${theme.colors.text.secondary};
  margin: 0;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  scroll-behavior: smooth;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(80, 255, 108, 0.2);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(80, 255, 108, 0.3);
  }

  @media (max-width: 768px) {
    padding: 12px;
    gap: 8px;
  }
`;

export const MessageBubble = styled.div`
  background: rgba(80, 255, 108, 0.05);
  border: 1px solid rgba(80, 255, 108, 0.1);
  border-radius: 16px 16px 16px 4px;
  padding: 12px 16px;
  animation: ${fadeIn} 0.3s ease;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(80, 255, 108, 0.08);
    border-color: rgba(80, 255, 108, 0.2);
  }

  @media (max-width: 768px) {
    padding: 10px 12px;
    border-radius: 12px 12px 12px 4px;
  }
`;

export const MessageName = styled.div`
  font-size: ${theme.typography.sizes.small};
  color: ${theme.colors.primary};
  font-weight: 600;
  margin-bottom: 4px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const MessageText = styled.div`
  font-size: ${theme.typography.sizes.small};
  color: ${theme.colors.text.primary};
  line-height: 1.6;
  word-wrap: break-word;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const MessageTime = styled.div`
  font-size: 12px;
  color: ${theme.colors.text.secondary};
  text-align: right;
  opacity: 0.7;
`;

export const ChatInputContainer = styled.div`
  padding: 16px;
  border-top: 1px solid rgba(80, 255, 108, 0.1);
  background: rgba(26, 26, 26, 0.8);
  display: flex;
  gap: 12px;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    padding: 12px;
    gap: 8px;
  }
`;

export const ChatInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.sizes.small};
  padding: 12px 16px;
  outline: none;
  font-family: inherit;
  
  &::placeholder {
    color: ${theme.colors.text.secondary};
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px;
  }
`;

export const SendButton = styled.button`
  background: ${theme.colors.primary};
  border: none;
  padding: 12px 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 44px;
  min-height: 44px;
  
  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
  
  svg {
    width: 20px;
    height: 20px;
    color: ${theme.colors.text.primary};
  }
  
  @media (max-width: 768px) {
    min-width: 40px;
    min-height: 40px;
    padding: 10px;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  text-align: center;
  flex: 1;

  h3 {
    font-size: ${theme.typography.sizes.medium};
    color: ${theme.colors.primary};
    margin: 0 0 1rem 0;
    font-weight: 600;
  }

  p {
    font-size: ${theme.typography.sizes.small};
    color: ${theme.colors.text.secondary};
    margin: 0 0 0.5rem 0;
    line-height: 1.6;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(80, 255, 108, 0.2);
  border-top: 2px solid ${theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto;
`;


