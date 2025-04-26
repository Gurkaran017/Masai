import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim() === '') return; // ✅ Fix 1: prevent adding empty task

    const newTask = {
      id: Date.now(), // ✅ unique identifier for each task
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask('');
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id)); // ✅ Fix 3: delete based on unique ID
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>

      <ul>
        {tasks.map((t) => (
          <li
            key={t.id}
            style={{
              textDecoration: t.completed ? 'line-through' : 'none', // ✅ Fix 2: strike-through
              marginBottom: '8px',
            }}
          >
            <span
              onClick={() => handleToggleComplete(t.id)}
              style={{ cursor: 'pointer', marginRight: '10px' }}
            >
              {t.text}
            </span>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
