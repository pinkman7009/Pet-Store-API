const express = require('express');
const router = express.Router();

const {
  register,
  login,
  getUser,
  logout,
} = require('../controllers/authController');

const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', protect, logout);
router.get('/me', protect, getUser);

module.exports = router;
