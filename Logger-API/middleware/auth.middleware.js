import { validateToken } from '../utils/token.utils.js';

// This middleware function will check if the provided token is valid or not
function authMiddleware(req, res, next) {
  // Get the token from the authorization header
  const providedToken = req.headers['authorization'];

  // Check if the token is valid
  if (providedToken && validateToken(providedToken)) {
    // Assign the user details to the request object
    req.user = { id: crypto.randomUUID(), name: 'Soumadip Majila 😊' };
    // Call the next middleware function
    next();
  } else {
    // Return an unauthorized response if the token is invalid
    res.status(401).send('Unauthorized user 🤔. Please provide a valid token.');
  }
}

export default authMiddleware;
