// Middleware to protect routes - only accessible if user is logged in
export const authMiddleware = (req, res, next) => {
  // Check if session exists and user is authenticated
  if (req.session && req.session.user) {
    return next(); // User is authenticated, proceed to next middleware or route
  }

  // If not authenticated, respond with 401 Unauthorized
  return res.status(401).json({
    success: false,
    error: 'Unauthorized',
  });
};
