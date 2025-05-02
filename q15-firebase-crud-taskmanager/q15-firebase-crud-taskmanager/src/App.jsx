import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [summary, setSummary] = useState({ completed: [], ongoing: [], 'not-started': [] });

  return (
    <div>
      <Navbar summary={summary} />
      <TaskForm selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
      <TaskList setSelectedTask={setSelectedTask} setSummary={setSummary} />
    </div>
  );
};

export default App;
