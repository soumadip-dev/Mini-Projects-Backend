import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';

// Import controllers
import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/task.controllers.js';

const router = Router();

// Route to get all tasks
router.get('/', authMiddleware, getAllTasks);

// Route to create a new task
router.post('/', authMiddleware, createTask);

// Route to update an existing task
router.put('/:id', authMiddleware, updateTask);

// Route to delete a task
router.delete('/:id', authMiddleware, deleteTask);

export default router;
