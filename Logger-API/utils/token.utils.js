import crypto from 'crypto';

// Generate a random token that can be used to authenticate requests to the /private endpoint
export const generateToken = () => {
  return crypto.randomBytes(16).toString('hex');
};

// Validate a token by checking its length
export const validateToken = token => {
  return token.length === 32;
};
