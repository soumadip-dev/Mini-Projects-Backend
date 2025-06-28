import { Router } from 'express';

const router = Router();

// Generate a random token that can be used to authenticate requests to the /private endpoint
router.get('/generate-token', (req, res) => {
  // todo: Calling utils method to create a random token
  const token = 'dgbkdsjfasdbfkjabf';
  res.status(200).json({
    success: true,
    message: 'Token generated, please save it for future use 📝',
    data: token,
  });
});

// Basic route to test if the API is up and running
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Logger API',
  });
});

export default router;
