import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Animação para crescimento da linha vertical
const lineGrowAnimation = keyframes`
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

export const CareerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const CareerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

export const CareerHeader = styled.div`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1001;
`;

export const CareerTitle = styled.h1`
  font-size: 28px;
  color: #ffffff;
  margin: 0;
  font-weight: 600;
  background: linear-gradient(135deg, #ffffff 0%, #b0b0b0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const CareerSubtitle = styled.p`
  color: #b0b0b0;
  margin: 5px 0 0 0;
  font-size: 16px;
  opacity: 0.8;
`;

export const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

export const TimelineContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(80, 255, 108, 0.3);
    border-radius: 4px;
    
    &:hover {
      background: rgba(80, 255, 108, 0.5);
    }
  }
  
  @media (max-width: 768px) {
    padding: 20px 15px;
    
    &::-webkit-scrollbar {
      width: 4px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 15px 10px;
    
    &::-webkit-scrollbar {
      width: 3px;
    }
  }
`;

export const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 40px;
  
  @media (max-width: 768px) {
    padding-left: 50px;
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
    rgba(80, 255, 108, 1) 0%,
    rgba(80, 255, 108, 0.6) 30%,
    rgba(80, 255, 108, 0.4) 70%,
    rgba(80, 255, 108, 0.2) 100%
  );
  border-radius: 1px;
  transform-origin: top center;
  height: 0;
  animation: ${lineGrowAnimation} 2.5s ease-out 0.5s forwards;
  
  @media (max-width: 768px) {
    left: 20px;
    top: 50px;
    height: ${props => props.dynamicHeight ? `${props.dynamicHeight}px` : '0px'};
    transition: height 0.1s ease-out;
    bottom: auto;
    animation: none;
  }
`;

export const TimelineYear = styled.div<{ index?: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
  z-index: 2;
  gap: 20px;
  
  @media (max-width: 768px) {
    margin-bottom: 35px;
    gap: 15px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 30px;
    gap: 12px;
  }
`;

export const TimelineCircle = styled.div<{ featured?: boolean; index?: number }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ featured }) =>
    featured
      ? 'linear-gradient(135deg, #50ff6c 0%, #32cd32 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #b0b0b0 100%)'
  };
  border: 3px solid ${({ featured }) =>
    featured
      ? 'rgba(80, 255, 108, 0.5)'
      : 'rgba(255, 255, 255, 0.3)'
  };
  cursor: pointer;
  transition: all 0.3s ease;
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  box-shadow: ${({ featured }) =>
    featured
      ? '0 0 20px rgba(80, 255, 108, 0.4)'
      : '0 0 10px rgba(255, 255, 255, 0.2)'
  };
  
  &:hover {
    transform: translateY(-50%) scale(1.2);
    box-shadow: ${({ featured }) =>
    featured
      ? '0 0 30px rgba(80, 255, 108, 0.6)'
      : '0 0 20px rgba(255, 255, 255, 0.4)'
  };
  }
  
  @media (max-width: 768px) {
    left: -35px;
  }
`;

export const YearLabel = styled.span<{ index?: number }>`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  min-width: 80px;
  text-align: left;
  background: rgba(255, 255, 255, 0.05);
  padding: 8px 16px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: inline-block;
  
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 6px 12px;
    min-width: 60px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 4px 8px;
    min-width: 50px;
  }
`;

export const ModalOverlay = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ visible }) => visible ? 1 : 0};
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

export const ModalContent = styled.div<{ visible: boolean }>`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  animation: ${({ visible }) => visible ? fadeIn : 'none'} 0.3s ease;
`;

export const ModalCard = styled.div`
  background: linear-gradient(135deg, rgba(30, 30, 30, 0.95) 0%, rgba(42, 42, 42, 0.95) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 30px;
  width: 500px;
  max-height: 70vh;
  overflow-y: auto;
  backdrop-filter: blur(20px);
  position: relative;
  animation: ${slideUp} 0.3s ease;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`;

export const CompanyName = styled.h3`
  color: #ffffff;
  margin: 0 0 12px 0;
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #b0b0b0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Position = styled.h4`
  color: #50ff6c;
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 600;
`;

export const Period = styled.p`
  color: #b0b0b0;
  margin: 0 0 20px 0;
  font-size: 16px;
  opacity: 0.8;
  font-weight: 500;
`;

export const Description = styled.p`
  color: #b0b0b0;
  margin: 0 0 20px 0;
  font-size: 15px;
  line-height: 1.7;
`;

export const TechnologiesContainer = styled.div`
  margin: 20px 0;
`;

export const TechnologiesTitle = styled.h5`
  color: #ffffff;
  margin: 0 0 12px 0;
  font-size: 16px;
  font-weight: 600;
`;

export const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TechTag = styled.span`
  background: rgba(80, 255, 108, 0.15);
  color: #50ff6c;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid rgba(80, 255, 108, 0.3);
`;

export const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0 0;
`;

export const AchievementItem = styled.li`
  color: #b0b0b0;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 10px;
  position: relative;
  padding-left: 20px;
  
  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #50ff6c;
    font-weight: bold;
    font-size: 16px;
  }
`;
