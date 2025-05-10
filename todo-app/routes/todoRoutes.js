const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todoController');

// GET /todos → Get all todos
router.get('/todos', TodoController.getTodos);

// POST /todos → Add a new todo
router.post('/todos', TodoController.addTodo);

// GET /todos/search?q=<query> → Search todos by title
router.get('/todos/search', TodoController.searchTodos);

// PUT /todos/:id → Update todo by ID
router.put('/todos/:id', TodoController.updateTodo);

// DELETE /todos/:id → Delete todo by ID
router.delete('/todos/:id', TodoController.deleteTodo);

module.exports = router;
