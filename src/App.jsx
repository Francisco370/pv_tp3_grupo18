import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../src/css/App.css'
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

function App() {
  const[nidex, setIndex] = useState(1)
  const[task, setTask] = useState([])

     const addTask = (texto) => {
     const newTask = {
     id: nidex,
     tarea_a_realizar: texto,
     completada: false}
     setTask([...task,newTask])
     setIndex(nidex+1)
    }
    const toggleTask = (id) => {
      const act = task.map(task => task.id=== id ? {...task, completada: !task.completada} : task
    );
      setTask(act)
    }
    const deleteTask = (id) => {
      const filtro = task.filter(task => task.id !== id)
      setTask(filtro)
    }
    return(
    <div className="App">
      <h1>Lista de tareas</h1>
      <TaskInput addTask={addTask}/>
      <TaskList task={task} toggleTask={toggleTask}  deleteTask={deleteTask}/>
    </div>
    )
}
  
  

export default App;
