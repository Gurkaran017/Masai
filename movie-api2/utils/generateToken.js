const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateResetToken = (userId) => {
  return jwt.sign({ userId }, process.env.RESET_PASSWORD_SECRET, { expiresIn: '15m' });
};

module.exports = { generateResetToken };
