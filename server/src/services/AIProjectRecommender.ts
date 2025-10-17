
import { ProjectEntity } from '../domain/entities/project';

interface RecommendationResult {
  project: ProjectEntity;
  confidence: number;
  reasons: string[];
  category: string;
  matchedKeywords: string[];
}

interface RecommendationRequest {
  interests: string;
  preferredTechnologies?: string[];
  projectType?: 'web' | 'mobile' | 'ai' | 'enterprise' | 'healthcare';
  complexity?: 'beginner' | 'intermediate' | 'advanced';
  industry?: string;
}

export class AIProjectRecommender {
  private readonly projects: ProjectEntity[];

  // Dicionário de sinônimos e termos relacionados
  private readonly synonyms: { [key: string]: string[] } = {
    'web': ['website', 'frontend', 'backend', 'fullstack', 'react', 'javascript', 'html', 'css'],
    'mobile': ['app', 'android', 'ios', 'react native', 'flutter', 'native'],
    'ai': ['artificial intelligence', 'machine learning', 'ml', 'deep learning', 'nlp', 'neural network', 'automation'],
    'enterprise': ['corporate', 'business', 'company', 'organization', 'system', 'management'],
    'healthcare': ['medical', 'health', 'hospital', 'clinic', 'doctor', 'patient', 'medicine'],
    'authentication': ['login', 'auth', 'security', 'jwt', 'user management', 'access control'],
    'analytics': ['dashboard', 'metrics', 'reports', 'data', 'statistics', 'charts'],
    'database': ['data', 'storage', 'mongodb', 'postgresql', 'mysql', 'sql'],
    'api': ['rest', 'restful', 'endpoint', 'service', 'microservice', 'integration']
  };

  // Pesos para diferentes aspectos
  private readonly weights = {
    title: 3,
    description: 2,
    technologies: 2,
    category: 3,
    features: 1,
    keywords: 2
  };

  constructor(projects: ProjectEntity[]) {
    this.projects = projects;
  }

  recommend(request: RecommendationRequest | string): RecommendationResult[] {
    const normalizedRequest = typeof request === 'string'
      ? { interests: request }
      : request;

    const candidates = this.projects.map(project => {
      const score = this.calculateScore(project, normalizedRequest);
      const reasons = this.generateReasons(project, normalizedRequest, score);
      const matchedKeywords = this.findMatchedKeywords(project, normalizedRequest.interests);

      return {
        project,
        confidence: Math.min(score.total / 10, 1), // Normalizar para 0-1
        reasons,
        category: this.inferCategory(project),
        matchedKeywords
      };
    });

    // Ordenar por confiança e retornar top 3
    return candidates
      .filter(candidate => candidate.confidence > 0.1) // Filtrar matches muito baixos
      .sort((a, b) => b.confidence - a.confidence)
      .slice(0, 3);
  }

  private calculateScore(project: ProjectEntity, request: RecommendationRequest): any {
    const scores = {
      title: 0,
      description: 0,
      technologies: 0,
      category: 0,
      features: 0,
      keywords: 0,
      total: 0
    };

    const userKeywords = this.extractKeywords(request.interests);

    // Score baseado no título
    scores.title = this.calculateTextScore(project.title, userKeywords) * this.weights.title;

    // Score baseado na descrição
    scores.description = this.calculateTextScore(project.description, userKeywords) * this.weights.description;

    // Score baseado nas tecnologias
    if (request.preferredTechnologies) {
      scores.technologies = this.calculateTechnologyScore(project.technologies, request.preferredTechnologies) * this.weights.technologies;
    } else {
      scores.technologies = this.calculateTextScore(project.technologies.join(' '), userKeywords) * this.weights.technologies;
    }

    // Score baseado na categoria (usar keywords já que não temos category no server)
    scores.category = this.calculateCategoryScore('web', userKeywords) * this.weights.category;

    // Score baseado em palavras-chave expandidas
    scores.keywords = this.calculateExpandedKeywordScore(project, userKeywords) * this.weights.keywords;

    scores.total = Object.values(scores).reduce((sum, score) => sum + (typeof score === 'number' ? score : 0), 0) - scores.total;

    return scores;
  }

  private extractKeywords(text: string): string[] {
    return text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2)
      .filter(word => !['the', 'and', 'for', 'with', 'that', 'this', 'can', 'you', 'are'].includes(word));
  }

  private calculateTextScore(text: string, keywords: string[]): number {
    const textLower = text.toLowerCase();
    let score = 0;

    keywords.forEach(keyword => {
      // Exact match
      if (textLower.includes(keyword)) {
        score += 2;
      }

      // Partial match
      const textWords = textLower.split(/\s+/);
      textWords.forEach(word => {
        if (word.includes(keyword) || keyword.includes(word)) {
          score += 1;
        }
      });

      // Synonym match
      Object.entries(this.synonyms).forEach(([category, synonyms]) => {
        if (synonyms.includes(keyword) && synonyms.some(syn => textLower.includes(syn))) {
          score += 1.5;
        }
      });
    });

    return score;
  }

  private calculateTechnologyScore(projectTechs: string[], preferredTechs: string[]): number {
    let score = 0;
    preferredTechs.forEach(tech => {
      projectTechs.forEach(projectTech => {
        if (projectTech.toLowerCase().includes(tech.toLowerCase()) ||
          tech.toLowerCase().includes(projectTech.toLowerCase())) {
          score += 3;
        }
      });
    });
    return score;
  }

  private calculateCategoryScore(category: string, keywords: string[]): number {
    const categoryKeywords = this.synonyms[category] || [];
    return keywords.reduce((score, keyword) => {
      if (categoryKeywords.includes(keyword) || category.includes(keyword)) {
        return score + 3;
      }
      return score;
    }, 0);
  }

  private calculateExpandedKeywordScore(project: ProjectEntity, keywords: string[]): number {
    let score = 0;

    // Verificar sinônimos em todos os campos do projeto
    keywords.forEach(keyword => {
      Object.entries(this.synonyms).forEach(([category, synonyms]) => {
        if (synonyms.includes(keyword)) {
          // Se o usuário mencionou uma palavra que está em uma categoria de sinônimos,
          // verificar se o projeto contém outras palavras dessa categoria
          const projectText = `${project.title} ${project.description} ${project.technologies.join(' ')}`.toLowerCase();
          synonyms.forEach(synonym => {
            if (projectText.includes(synonym)) {
              score += 1;
            }
          });
        }
      });
    });

    return score;
  }

  private generateReasons(project: ProjectEntity, request: RecommendationRequest, scores: any): string[] {
    const reasons: string[] = [];

    if (scores.title > 2) {
      reasons.push(`O título "${project.title}" corresponde diretamente aos seus interesses`);
    }

    if (scores.technologies > 3) {
      reasons.push(`Utiliza tecnologias relevantes: ${project.technologies.slice(0, 3).join(', ')}`);
    }

    if (scores.description > 2) {
      reasons.push(`A descrição do projeto corresponde aos seus requisitos`);
    }

    if (project.impact && project.impact.value) {
      reasons.push(`Impacto mensurável: ${project.impact.value} ${project.impact.metric}`);
    }

    return reasons.slice(0, 3); // Máximo 3 razões
  }

  private inferCategory(project: ProjectEntity): string {
    const description = project.description.toLowerCase();
    const technologies = project.technologies.join(' ').toLowerCase();
    const title = project.title.toLowerCase();

    if (description.includes('ai') || description.includes('machine learning') || title.includes('ai')) {
      return 'ai';
    }
    if (description.includes('enterprise') || description.includes('corporate') || title.includes('enterprise')) {
      return 'enterprise';
    }
    if (description.includes('healthcare') || description.includes('medical') || description.includes('veterinary')) {
      return 'healthcare';
    }
    if (technologies.includes('react') || technologies.includes('javascript') || technologies.includes('web')) {
      return 'web';
    }
    return 'other';
  }

  private findMatchedKeywords(project: ProjectEntity, interests: string): string[] {
    const userKeywords = this.extractKeywords(interests);
    const projectText = `${project.title} ${project.description} ${project.technologies.join(' ')}`.toLowerCase();

    return userKeywords.filter(keyword =>
      projectText.includes(keyword) ||
      Object.values(this.synonyms).some(synonyms =>
        synonyms.includes(keyword) && synonyms.some(syn => projectText.includes(syn))
      )
    );
  }

  // Método adicional para obter estatísticas de recomendação
  getRecommendationStats(request: RecommendationRequest | string): any {
    const recommendations = this.recommend(request);

    return {
      totalProjects: this.projects.length,
      matchedProjects: recommendations.length,
      avgConfidence: recommendations.reduce((sum, r) => sum + r.confidence, 0) / recommendations.length || 0,
      categories: [...new Set(recommendations.map(r => r.category))],
      topTechnologies: this.getTopTechnologies(recommendations)
    };
  }

  private getTopTechnologies(recommendations: RecommendationResult[]): string[] {
    const techCount: { [key: string]: number } = {};

    recommendations.forEach(r => {
      r.project.technologies.forEach(tech => {
        techCount[tech] = (techCount[tech] || 0) + 1;
      });
    });

    return Object.entries(techCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([tech]) => tech);
  }
}
