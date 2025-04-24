import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration
const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('🚀 Welcome to the API!');
});

app.listen(PORT, () => console.log(`🚀 Server running at port ${PORT}`));