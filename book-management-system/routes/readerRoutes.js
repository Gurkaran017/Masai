const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const returnCheckMiddleware = require('../middlewares/returnCheckMiddleware');

// Reader Routes
router.get('/reader/books', bookController.getAvailableBooks);
router.post('/reader/borrow/:id', bookController.borrowBook);
router.post('/reader/return/:id', returnCheckMiddleware, bookController.returnBook);

module.exports = router;
