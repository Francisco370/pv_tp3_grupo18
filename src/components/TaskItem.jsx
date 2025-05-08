import React from 'react';


const TaskItem = ({ tarea, completada, onToggle, onEliminar }) => {
  return (
    <li
      style={{
        textDecoration: completada ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
    >
      <span onClick={onToggle}>{tarea}</span>
      <button onClick={onEliminar} style={{ marginLeft: '10px' }}>❌</button>
    </li>
  );
};
export default TaskItem;