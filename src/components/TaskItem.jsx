import React from 'react';


const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li
      style={{
        textDecoration: task.completada ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
    >
      <input 
        type="checkbox" 
        checked={task.completada}
        onChange={() => toggleTask(task.id)} 
      />
      <span>{task.tarea_a_realizar}</span>
      <button onClick={() => deleteTask(task.id)} style={{ marginLeft: '10px' }}>❌</button>
    </li>
  );
};
export default TaskItem;