
import React, { useState } from 'react';
import axios from 'axios';
import { ProjectEntity } from '../../domain/entities/Project';
import {
  AIRecommenderContainer,
  AIRecommenderContent,
  Title,
  Subtitle,
  InputSection,
  InputGroup,
  Label,
  Input,
  RecommendButton,
  RecommendationSection,
  RecommendationCard,
  ProjectTitle,
  ProjectDescription,
  TechTags,
  TechTag,
  ProjectLinks,
  ProjectLink,
  LoadingState,
  EmptyState,
  CloseButton,
  AIBadge,
} from './AIRecommender.styles';

const API_URL = 'http://localhost:3001/api';

interface AIRecommenderProps {
  isVisible: boolean;
  onClose: () => void;
  onNext?: () => void;
}

const AIRecommender: React.FC<AIRecommenderProps> = ({ isVisible, onClose, onNext }) => {
  const [interest, setInterest] = useState('');
  const [recommendation, setRecommendation] = useState<ProjectEntity | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleRecommend = async () => {
    if (!interest.trim()) return;

    setIsLoading(true);
    setHasSearched(true);
    try {
      const response = await axios.post(`${API_URL}/recommend-project`, {
        interest: interest.trim()
      });
      setRecommendation(response.data);
    } catch (error) {
      console.error('Failed to get recommendation:', error);
      setRecommendation(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleRecommend();
    }
  };

  const resetSearch = () => {
    setInterest('');
    setRecommendation(null);
    setHasSearched(false);
  };

  return (
    <AIRecommenderContainer isVisible={isVisible}>
      <CloseButton onClick={onClose}>×</CloseButton>

      <AIRecommenderContent>
        <AIBadge>AI Powered</AIBadge>

        <Title>
          🤖 AI Project Recommender
        </Title>

        <Subtitle>
          Conte-me seus interesses e deixe que nossa IA encontre o projeto perfeito do meu portfólio para você!
          Use palavras-chave como "web development", "machine learning", "mobile app", etc.
        </Subtitle>

        <InputSection>
          <InputGroup>
            <Label>Descreva seus interesses</Label>
            <Input
              type="text"
              placeholder="Ex: Desenvolvimento web com React, API REST, aplicativo mobile..."
              value={interest}
              onChange={e => setInterest(e.target.value)}
              onKeyPress={handleKeyPress}
              maxLength={200}
            />
          </InputGroup>

          <RecommendButton
            onClick={handleRecommend}
            disabled={isLoading || !interest.trim()}
          >
            {isLoading ? 'Analisando...' : 'Encontrar Projeto Ideal'}
          </RecommendButton>
        </InputSection>

        <RecommendationSection>
          {isLoading && (
            <LoadingState>
              <div className="spinner"></div>
              <h3>🧠 IA Analisando...</h3>
              <p>Processando seus interesses e encontrando o projeto perfeito para você!</p>
            </LoadingState>
          )}

          {!isLoading && hasSearched && recommendation && (
            <RecommendationCard>
              <ProjectTitle>
                ⭐ {recommendation.title}
              </ProjectTitle>

              <ProjectDescription>
                {recommendation.description}
              </ProjectDescription>

              {recommendation.technologies && recommendation.technologies.length > 0 && (
                <TechTags>
                  {recommendation.technologies.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechTags>
              )}

              <ProjectLinks>
                {recommendation.githubUrl && (
                  <ProjectLink href={recommendation.githubUrl} target="_blank" rel="noopener noreferrer">
                    📚 Ver Código
                  </ProjectLink>
                )}
                {recommendation.demoUrl && (
                  <ProjectLink href={recommendation.demoUrl} target="_blank" rel="noopener noreferrer">
                    🚀 Ver Demo
                  </ProjectLink>
                )}
                <ProjectLink href="#" onClick={(e) => { e.preventDefault(); resetSearch(); }}>
                  🔄 Nova Busca
                </ProjectLink>
              </ProjectLinks>
            </RecommendationCard>
          )}

          {!isLoading && hasSearched && !recommendation && (
            <EmptyState>
              <h3>🤔 Nenhum projeto encontrado</h3>
              <p>Não encontrei um projeto que corresponda aos seus interesses específicos.</p>
              <p>Tente usar termos mais gerais como "web", "mobile", "frontend", "backend" ou "fullstack".</p>
              <RecommendButton
                onClick={resetSearch}
                style={{ marginTop: '2rem', maxWidth: '300px', margin: '2rem auto 0' }}
              >
                🔄 Tentar Novamente
              </RecommendButton>
            </EmptyState>
          )}

          {!hasSearched && (
            <EmptyState>
              <h3>✨ Pronto para descobrir?</h3>
              <p>Digite seus interesses acima e deixe nossa IA encontrar o projeto ideal para você!</p>
              <p>Quanto mais específico, melhor será a recomendação.</p>
            </EmptyState>
          )}
        </RecommendationSection>
      </AIRecommenderContent>
    </AIRecommenderContainer>
  );
};

export default AIRecommender;
