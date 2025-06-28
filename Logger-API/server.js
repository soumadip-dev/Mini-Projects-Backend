import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import publicRoutes from './routes/public.routes.js';
import privateRoutes from './routes/private.routes.js';
import { logMiddleware } from './middleware/log.middleware.js';

// Load environment variables from .env file
dotenv.config();

// Define the server port
const PORT = process.env.PORT || 8080;

// Determine the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize the Express application
const app = express();

// Global middleware to log requests
app.use(logMiddleware);

// Ensure the logs directory exists
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Register public and private routes
app.use('/api/v1/public', publicRoutes);
app.use('/api/v1/private', privateRoutes);

// Define a basic route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Logger API! 🔥');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
