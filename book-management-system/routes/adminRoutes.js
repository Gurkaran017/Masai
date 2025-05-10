const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Admin Routes
router.post('/admin/books', bookController.addBook);
router.get('/admin/books', bookController.getAllBooks);
router.patch('/admin/books/:id', bookController.updateBook);
router.delete('/admin/books/:id', bookController.deleteBook);

module.exports = router;
