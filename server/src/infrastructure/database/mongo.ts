
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
      console.warn('⚠️  MONGODB_URI not found, using in-memory fallback');
      return;
    }

    // Verificar se a senha está configurada
    if (mongoUri.includes('<db_password>')) {
      console.warn('⚠️  Please replace <db_password> with your actual password in .env file');
      console.warn('⚠️  Using in-memory fallback');
      return;
    }

    const options = {
      // Configurações recomendadas para MongoDB Atlas
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    };

    await mongoose.connect(mongoUri, options);
    console.log('✅ MongoDB Atlas connected successfully');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.warn('⚠️  MongoDB connection failed, using in-memory fallback:', errorMessage);
    // Não sair do processo, apenas avisar
  }
};

export default connectDB;
