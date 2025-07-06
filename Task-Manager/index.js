// Importing required modules
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js';

const app = express(); // Create an Express app

app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser()); // Parse cookies

// Configure session middleware
app.use(
  session({
    secret: 'mySecret', // Secret used to sign the session ID
    resave: false, // Avoid resaving session if unmodified
    saveUninitialized: false, // Don't create session until something is stored
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API 📝');
});

// Auth and Task APIs
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/tasks', taskRoutes);

// Start server on port 8080
app.listen(8080, () => {
  console.log('Server is running on port 8080 ✅ ');
});
