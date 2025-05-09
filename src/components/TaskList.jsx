import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskItem from './TaskItem';
import '../css/lista.css';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
    return (
      <div id="idlista">
        <ul className='Lista-de-tareas'>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            ))
          ) : (
            <li>No hay tareas aún.</li>
          )}
        </ul>
      </div>
    );
  };

export default TaskList;

//TaskList: Renderiza la lista de tareas