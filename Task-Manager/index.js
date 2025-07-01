import express from 'express';

import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
