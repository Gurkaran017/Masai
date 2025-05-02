import React, { useState } from 'react';
import { firestore } from '../firebase-config';

const TaskForm = ({ selectedTask, setSelectedTask }) => {
  const [taskName, setTaskName] = useState('');
  const [status, setStatus] = useState('not-started');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedTask) {
      await firestore.collection('tasks').doc(selectedTask.id).update({
        name: taskName,
        status,
      });
      setSelectedTask(null);
    } else {
      await firestore.collection('tasks').add({
        name: taskName,
        status,
      });
    }
    setTaskName('');
    setStatus('not-started');
  };

  React.useEffect(() => {
    if (selectedTask) {
      setTaskName(selectedTask.name);
      setStatus(selectedTask.status);
    }
  }, [selectedTask]);

  return (
    <form onSubmit={handleSubmit}>
      <input value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Task name" required />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="not-started">Not Started</option>
        <option value="ongoing">Ongoing</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">{selectedTask ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TaskForm;
