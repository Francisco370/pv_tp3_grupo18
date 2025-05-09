import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskItem from './TaskItem';
import '../css/lista.css';

const TaskList = () => {
    const [tareas, setTareas] = useState([]);

    const guardar = (nuevaTarea) => {
        setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
    };

    const toggleTarea = (index) => {
        const nuevasTareas = [...tareas];
        nuevasTareas[index].completada = !nuevasTareas[index].completada;
        setTareas(nuevasTareas);
      };

      const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((_, i) => i !== index);
        setTareas(nuevasTareas);
      };

    return (
        <div>
            <TaskInput guardar={guardar} />
            <ul>
                 {tareas.map((tarea, index) => (
                 <TaskItem
                   key={index}
                   tarea={tarea.texto}
                   completada={tarea.completada}
                  onToggle={() => toggleTarea(index)}
                  onEliminar={() => eliminarTarea(index)}
                 />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;

//TaskList: Renderiza la lista de tareas