import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { personalInfoRoutes } from './presentation/routes/personalInfoRoutes';
import { projectRoutes } from './presentation/routes/projectRoutes';
import { guestbookRoutes } from './presentation/routes/guestbookRoutes';
import connectDB from './infrastructure/database/mongo';
import { AIProjectRecommender } from './services/AIProjectRecommender';
import { InMemoryProjectRepository } from './infrastructure/repositories/InMemoryProjectRepository';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.configureMiddleware();
    this.configureRoutes();
    connectDB();
  }

  private configureMiddleware(): void {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private configureRoutes(): void {
    this.app.use('/api', personalInfoRoutes);
    this.app.use('/api', projectRoutes);
    this.app.use('/api', guestbookRoutes);

    // AI Recommender endpoints
    this.app.post('/api/recommend-projects', async (req, res) => {
      try {
        const request = req.body;
        const projectRepository = new InMemoryProjectRepository();
        const projects = await projectRepository.getAllProjects();

        const recommender = new AIProjectRecommender(projects);
        const recommendations = recommender.recommend(request);
        const stats = recommender.getRecommendationStats(request);

        res.json({
          recommendations,
          stats,
          query: request
        });
      } catch (error) {
        console.error('AI Recommendation error:', error);
        res.status(500).json({ error: 'Failed to generate recommendations' });
      }
    });

    this.app.post('/api/recommend-project', async (req, res) => {
      try {
        const { interest } = req.body;
        const projectRepository = new InMemoryProjectRepository();
        const projects = await projectRepository.getAllProjects();

        const recommender = new AIProjectRecommender(projects);
        const recommendations = recommender.recommend(interest);
        const topRecommendation = recommendations[0]?.project;

        res.json(topRecommendation || null);
      } catch (error) {
        console.error('AI Recommendation error:', error);
        res.status(500).json({ error: 'Failed to generate recommendation' });
      }
    });

    this.app.get('/health', (req, res) => {
      res.json({ status: 'ok', timestamp: new Date().toISOString() });
    });
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  }
}

export default App;
