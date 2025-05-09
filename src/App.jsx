import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../src/css/App.css'
import TaskList from './components/TaskList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TaskList/>
    </>
  )
}

export default App;
