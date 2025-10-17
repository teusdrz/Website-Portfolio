import 'dotenv/config';
import App from './app';

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;

const app = new App();
app.start(PORT);
