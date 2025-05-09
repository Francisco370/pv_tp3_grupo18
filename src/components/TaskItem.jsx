import React from 'react';


const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li
      style={{
        textDecoration: task.completada ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
    >

      <span onClick={toggleTask}>{task}</span>
      <button onClick={deleteTask} style={{ marginLeft: '10px' }}>❌</button>
    </li>
  );
};
export default TaskItem;