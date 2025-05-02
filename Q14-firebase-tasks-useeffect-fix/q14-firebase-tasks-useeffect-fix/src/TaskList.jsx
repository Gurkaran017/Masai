// src/TaskList.jsx
import React, { useState, useEffect } from 'react';
import { firestore } from './firebase-config';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('tasks').onSnapshot(snapshot => {
      const fetchedTasks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(fetchedTasks);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
