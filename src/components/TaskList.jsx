import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskItem from './TaskItem';

const TaskList = ({task,toggleTask,deleteTask}) => {
    return(
 <div id="idlista" >
        <ul Classname='Lista de tareas'>
            {task.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
 </div>
    );
};

export default TaskList;

//TaskList: Renderiza la lista de tareas