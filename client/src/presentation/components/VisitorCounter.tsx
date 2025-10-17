import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { VisitorStats, VisitorData } from '../../domain/entities/Visitor';

interface VisitorCounterProps {
    stats: VisitorStats;
    currentPage: string;
    isLoading?: boolean;
}

const glassShimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const CounterContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1001;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const MainCounter = styled.div<{ isExpanded: boolean }>`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
    box-shadow: 
      0 12px 40px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
  
  ${props => props.isExpanded && `
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  `}
`;

const CounterText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const VisitorIcon = styled.span`
  font-size: 16px;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const Count = styled.span`
  color: #50FF6C;
  font-weight: 700;
`;

const ExpandedPanel = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  width: 320px;
  max-height: 400px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  border-top-right-radius: 4px;
  margin-top: -1px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)'};
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  animation: ${props => props.isVisible ? slideDown : 'none'} 0.3s ease-out;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
`;

const PanelHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const PanelTitle = styled.h3`
  margin: 0 0 8px 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  font-weight: 700;
`;

const PageStats = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const PageBadge = styled.div<{ isActive: boolean }>`
  background: ${props => props.isActive
        ? 'linear-gradient(135deg, #50FF6C, #00E5FF)'
        : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.isActive ? '#000' : 'rgba(255, 255, 255, 0.8)'};
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.2s ease;
`;

const VisitorList = styled.div`
  max-height: 240px;
  overflow-y: auto;
  padding: 8px;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;

const VisitorCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
    
    &:before {
      left: 100%;
    }
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const VisitorName = styled.div`
  color: #50FF6C;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
`;

const VisitorInfo = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const VisitorMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const ReferrerBadge = styled.span<{ referrer: string }>`
  background: ${props => {
        switch (props.referrer.toLowerCase()) {
            case 'linkedin': return 'linear-gradient(135deg, #0077B5, #005885)';
            case 'github': return 'linear-gradient(135deg, #333, #24292e)';
            case 'google': return 'linear-gradient(135deg, #4285F4, #34A853)';
            case 'instagram': return 'linear-gradient(135deg, #E4405F, #C13584)';
            default: return 'rgba(255, 255, 255, 0.1)';
        }
    }};
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
`;

const LoadingShimmer = styled.div`
  background: linear-gradient(90deg, 
    rgba(255, 255, 255, 0.1) 25%, 
    rgba(255, 255, 255, 0.2) 50%, 
    rgba(255, 255, 255, 0.1) 75%
  );
  background-size: 200% 100%;
  animation: ${glassShimmer} 1.5s infinite;
  border-radius: 8px;
  height: 20px;
  width: 100%;
`;

export const VisitorCounter: React.FC<VisitorCounterProps> = ({
    stats,
    currentPage,
    isLoading
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleVisitorClick = (visitor: VisitorData) => {
        if (visitor.referrer === 'LinkedIn') {
            // Em uma implementação real, isso seria um link para o LinkedIn
            window.open('https://linkedin.com', '_blank');
        }
    };

    const formatTime = (timestamp: string) => {
        return new Date(timestamp).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (isLoading) {
        return (
            <CounterContainer>
                <MainCounter isExpanded={false}>
                    <LoadingShimmer />
                </MainCounter>
            </CounterContainer>
        );
    }

    return (
        <CounterContainer>
            <MainCounter
                isExpanded={isExpanded}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <CounterText>
                    <VisitorIcon>👁️</VisitorIcon>
                    <Count>{stats.totalVisitors}</Count>
                    visitors
                </CounterText>
            </MainCounter>

            <ExpandedPanel isVisible={isExpanded}>
                <PanelHeader>
                    <PanelTitle>Portfolio Visitors</PanelTitle>
                    <PageStats>
                        {Object.entries(stats.pageViews).map(([page, count]) => (
                            <PageBadge key={page} isActive={page === currentPage}>
                                {page}: {count as number}
                            </PageBadge>
                        ))}
                    </PageStats>
                </PanelHeader>

                <VisitorList>
                    {stats.uniqueVisitors.slice(-10).reverse().map((visitor: VisitorData) => (
                        <VisitorCard
                            key={visitor.id}
                            onClick={() => handleVisitorClick(visitor)}
                        >
                            <VisitorName>{visitor.displayName}</VisitorName>
                            <VisitorInfo>
                                <VisitorMeta>
                                    <div>📍 {visitor.location}</div>
                                    <div>🌐 {visitor.browser}</div>
                                </VisitorMeta>
                                <div>
                                    <ReferrerBadge referrer={visitor.referrer}>
                                        {visitor.referrer}
                                    </ReferrerBadge>
                                    <div style={{ fontSize: '10px', marginTop: '2px', opacity: 0.6 }}>
                                        {formatTime(visitor.firstVisit)}
                                    </div>
                                </div>
                            </VisitorInfo>
                        </VisitorCard>
                    ))}
                </VisitorList>
            </ExpandedPanel>
        </CounterContainer>
    );
};
