import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get("https://firebase-db.firebaseio.com/tasks.json");

      // Parse Firebase object response into an array
      if (response.data) {
        const tasksArray = Object.entries(response.data).map(([id, task]) => ({
          id,
          ...task,
        }));
        setTasks(tasksArray);
      } else {
        setTasks([]);
      }

    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError("Failed to fetch tasks. Please try again later.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Task List</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
