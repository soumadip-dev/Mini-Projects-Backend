import { Router } from 'express';
import authMiddleware from '../middleware/auth.middleware.js';

// Create a new express router
const router = Router();

// Define a route for the dashboard page
router.get('/dashboard', authMiddleware, (req, res) => {
  res.status(200).json({
    message: 'Welcome to the dashboard page 🎉',
    data: req.user,
  });
});

// Export the router
export default router;
