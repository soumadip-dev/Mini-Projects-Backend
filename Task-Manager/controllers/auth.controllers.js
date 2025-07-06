// Controller to handle user login
export const Login = (req, res) => {
  const { userName } = req.body;

  // Check if username is provided
  if (!userName) {
    return res.status(400).json({
      success: false,
      message: 'Username is required',
    });
  }

  // Store user info in session
  req.session.user = { userName };

  // Set a cookie with the username
  res.cookie('userName', userName, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  });

  // Respond with success
  res.status(200).json({
    success: true,
    message: 'User logged in successfully',
    userName: userName,
  });
};

// Controller to handle user logout
export const Logout = (req, res) => {
  // Clear the username cookie
  res.clearCookie('userName');

  // Destroy the session
  req.session.destroy();

  // Respond with success
  res.status(200).json({
    success: true,
    message: 'User logged out successfully',
  });
};
