import { Router } from 'express';

// Create a new express router
const router = Router();

// Define a route for the dashboard page
router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the dashboard page',
  });
});

// Export the router
export default router;
