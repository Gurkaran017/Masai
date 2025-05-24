const express = require('express');
const { createReview } = require('../controllers/review.controller');
const { authenticate } = require('../middleware/auth.middleware');
const router = express.Router();

router.post('/:movieId', authenticate, createReview);

module.exports = router;
