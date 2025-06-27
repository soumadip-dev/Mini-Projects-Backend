import { Router } from 'express';

const router = Router();

router.get('/generate-token', (req, res) => {
  // todo: Calling utils method to create a random token
  const token = 'dgbkdsjfasdbfkjabf';
  res.status(200).json({
    success: true,
    message: 'Token generated, please save it for future use 📝',
    data: token,
  });
});

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Logger API',
  });
});

export default router;
