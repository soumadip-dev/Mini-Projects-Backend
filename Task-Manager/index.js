//  Importing required modules
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js';

const app = express(); // Creating an Express application

app.use(express.json()); // Middleware to parse JSON data from the request body

// Middleware to parse cookies
app.use(cookieParser());

// Middleware to initialize sessions
app.use(
  session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

//  Define a route
app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API 📝');
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/tasks', taskRoutes);

//  Start the server
app.listen(8080, () => {
  console.log('Server is running on port 8080 ✅ ');
});
