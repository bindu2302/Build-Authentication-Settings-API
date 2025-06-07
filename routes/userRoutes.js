const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  register,
  login,
  getProfile,
  updateProfile,
} = require('../controllers/authController');

// Register a new user
router.post('/register', register);

// Login
router.post('/login', login);

// Protected route to get profile
router.get('/profile', auth, getProfile);

// Update profile
router.patch('/profile', auth, updateProfile);

module.exports = router;
