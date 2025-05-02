import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase-config';

const TaskList = ({ setSelectedTask, setSummary }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('tasks').onSnapshot(snapshot => {
      const taskData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(taskData);

      const summary = {
        completed: taskData.filter(t => t.status === 'completed'),
        ongoing: taskData.filter(t => t.status === 'ongoing'),
        'not-started': taskData.filter(t => t.status === 'not-started'),
      };
      setSummary(summary);
    });
    return () => unsubscribe();
  }, []);

  const deleteTask = async (id) => {
    await firestore.collection('tasks').doc(id).delete();
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.name} - <strong>{task.status}</strong>
          <button onClick={() => setSelectedTask(task)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
