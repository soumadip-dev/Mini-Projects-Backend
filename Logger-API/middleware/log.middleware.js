import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Determine the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const logMiddleware = (req, res, next) => {
  // Create a log string with the current date/time, method, and URL
  const logData = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;

  // Determine the path to the log file
  const logFile = path.join(__dirname, '../logs/access.log');

  // Append the log string to the log file
  fs.appendFile(logFile, logData, error => {
    if (error) {
      console.log('😞 Failed to write log:', error);
    }
    // Call the next middleware function
    next();
  });
};
