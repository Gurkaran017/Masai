const fs = require('fs');
const path = './db.json';

// Read todos from db.json
const getTodos = () => {
  const data = fs.readFileSync(path, 'utf-8');
  return JSON.parse(data);
};

// Write todos to db.json
const saveTodos = (todos) => {
  fs.writeFileSync(path, JSON.stringify(todos, null, 2), 'utf-8');
};

module.exports = { getTodos, saveTodos };
