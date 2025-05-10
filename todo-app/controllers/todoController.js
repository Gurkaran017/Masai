const Todo = require('../models/todoModel');

// GET /todos → Get all todos
const getTodos = (req, res) => {
  const todos = Todo.getTodos();
  res.status(200).json(todos);
};

// POST /todos → Add a new todo
const addTodo = (req, res) => {
  const { title, completed } = req.body;
  const todos = Todo.getTodos();
  const newTodo = { id: todos.length + 1, title, completed };
  todos.push(newTodo);
  Todo.saveTodos(todos);
  res.status(201).json(newTodo);
};

// GET /todos/search?q=<query> → Search todos by title
const searchTodos = (req, res) => {
  const { q } = req.query;
  const todos = Todo.getTodos();
  const filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(q.toLowerCase()));
  
  if (filteredTodos.length > 0) {
    res.status(200).json(filteredTodos);
  } else {
    res.status(404).json({ message: "No todos found" });
  }
};

// PUT /todos/:id → Update a todo by ID
const updateTodo = (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const todos = Todo.getTodos();
  const todoIndex = todos.findIndex(todo => todo.id == id);
  
  if (todoIndex !== -1) {
    todos[todoIndex].completed = completed;
    Todo.saveTodos(todos);
    res.status(200).json(todos[todoIndex]);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

// DELETE /todos/:id → Delete a todo by ID
const deleteTodo = (req, res) => {
  const { id } = req.params;
  let todos = Todo.getTodos();
  todos = todos.filter(todo => todo.id != id);

  if (todos.length < Todo.getTodos().length) {
    Todo.saveTodos(todos);
    res.status(200).json({ message: "Todo deleted" });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

module.exports = { getTodos, addTodo, searchTodos, updateTodo, deleteTodo };
