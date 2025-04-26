import React, { useState } from 'react';

const priorityOrder = {
  High: 3,
  Medium: 2,
  Low: 1,
};

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');

  const [priorityFilter, setPriorityFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const addTask = () => {
    if (title.trim() === '') return;

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask].sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);

    setTasks(updatedTasks);
    setTitle('');
    setPriority('Medium');
  };

  const toggleCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks
    .filter((task) =>
      priorityFilter === 'All' ? true : task.priority === priorityFilter
    )
    .filter((task) => {
      if (statusFilter === 'All') return true;
      if (statusFilter === 'Completed') return task.completed;
      if (statusFilter === 'Incomplete') return !task.completed;
      return true;
    });

  return (
    <div>
      <h1>Advanced Task Manager</h1>

      <div>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Filters</h3>
        <label>
          Priority:
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>

        <label style={{ marginLeft: '20px' }}>
          Status:
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>
        </label>
      </div>

      <ul style={{ marginTop: '20px' }}>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            style={{
              marginBottom: '10px',
              padding: '10px',
              border: '1px solid #ccc',
              backgroundColor: task.priority === 'High' ? '#ffe6e6' : '#f4f4f4',
              textDecoration: task.completed ? 'line-through' : 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>
              <strong>{task.title}</strong> - <em>{task.priority}</em>
            </span>
            <div>
              <button onClick={() => toggleCompletion(task.id)}>
                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                style={{ marginLeft: '10px' }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
