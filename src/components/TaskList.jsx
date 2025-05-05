import React, { useState } from 'react';
import TaskInput from './TaskInput';

const TaskList = () => {
    const [tareas, setTareas] = useState([]);

    const guardar = (nuevaTarea) => {
        console.log(nuevaTarea);
        setTareas([...tareas, nuevaTarea]);
    };

    return (
        <div>
            <TaskInput guardar={guardar} />
            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index}>{tarea}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;

//TaskList: Renderiza la lista de tareas