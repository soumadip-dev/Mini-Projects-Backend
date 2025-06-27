import express from 'express';
import dotenv from 'dotenv';
import publicRoutes from './routes/public.routes.js';
import privateRoutes from './routes/private.routes.js';

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();
app.use('/api/v1/public', publicRoutes);
app.use('/api/v1/private', privateRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Logger API! 🔥');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
