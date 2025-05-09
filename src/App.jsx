import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../src/css/App.css'
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

function App() {
  const [nidex, setIndex] = useState(1);
  const [tasks, setTasks] = useState([]);

  const addTask = (texto) => {
    const newTask = {
      id: nidex,
      tarea_a_realizar: texto,
      completada: false,
    };
    setTasks([...tasks, newTask]);
    setIndex(nidex + 1);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completada: !task.completada } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

  
  

export default App;
