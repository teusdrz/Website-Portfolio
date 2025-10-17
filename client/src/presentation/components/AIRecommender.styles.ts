import styled from 'styled-components';

export const AIRecommenderContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
  display: ${props => props.isVisible ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow-y: auto;
  padding: 2rem;
`;

export const AIRecommenderContent = styled.div`
  width: 100%;
  max-width: 900px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h2`
  color: #50FF6C;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px rgba(80, 255, 108, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Subtitle = styled.p`
  color: #B0B0B0;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const InputSection = styled.div`
  margin-bottom: 3rem;
`;

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  color: #50FF6C;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(80, 255, 108, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  color: white;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &::placeholder {
    color: #666;
  }

  &:focus {
    outline: none;
    border-color: #50FF6C;
    box-shadow: 0 0 20px rgba(80, 255, 108, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const RecommendButton = styled.button`
  background: linear-gradient(135deg, #50FF6C 0%, #40E05A 100%);
  color: #1A1A1A;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1.2rem 3rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(80, 255, 108, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

export const RecommendationSection = styled.div`
  margin-top: 3rem;
`;

export const RecommendationCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(80, 255, 108, 0.3);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: #50FF6C;
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(80, 255, 108, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #50FF6C, #40E05A, #50FF6C);
    border-radius: 20px 20px 0 0;
  }
`;

export const ProjectTitle = styled.h3`
  color: #50FF6C;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProjectDescription = styled.p`
  color: #E0E0E0;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
`;

export const TechTag = styled.span`
  background: rgba(80, 255, 108, 0.1);
  color: #50FF6C;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(80, 255, 108, 0.3);
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const ProjectLink = styled.a`
  background: rgba(255, 255, 255, 0.05);
  color: #50FF6C;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid rgba(80, 255, 108, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(80, 255, 108, 0.1);
    transform: translateY(-2px);
  }
`;

export const LoadingState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3rem;
  text-align: center;
  color: #50FF6C;

  .spinner {
    width: 50px;
    height: 50px;
    border: 3px solid rgba(80, 255, 108, 0.3);
    border-top: 3px solid #50FF6C;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #888;

  h3 {
    color: #50FF6C;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  font-size: 1.5rem;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }
`;

export const AIBadge = styled.div`
  background: linear-gradient(135deg, #50FF6C 0%, #40E05A 100%);
  color: #1A1A1A;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 1rem;

  &::before {
    content: '🤖';
    font-size: 0.8rem;
  }
`;
