import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Logger API! 🔥');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});

