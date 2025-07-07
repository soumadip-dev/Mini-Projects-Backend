import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = Router();

// Route to get all tasks
router.get('/', authMiddleware, (req, res) => {
  // TODO: Implement get all tasks logic
});

// Route to create a new task
router.post('/', authMiddleware, (req, res) => {
  // TODO: Implement create task logic
});

// Route to update an existing task
router.put('/:id', authMiddleware, (req, res) => {
  // TODO: Implement update task logic
});

// Route to delete a task
router.delete('/:id', authMiddleware, (req, res) => {
  // TODO: Implement delete task logic
});

export default router;
