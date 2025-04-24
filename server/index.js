import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

// Routes
app.get('/test', (req, res) => {
  res.send('🚀 Welcome to the API!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at ${PORT}`);
});
