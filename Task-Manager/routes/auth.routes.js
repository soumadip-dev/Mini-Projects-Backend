import { Router } from 'express';
import { Login, Logout } from '../controllers/auth.controllers.js';

const router = Router();

// Route to log in the user
router.post('/login', Login);

// Route to log out the user
router.post('/logout', Logout);

export default router;
