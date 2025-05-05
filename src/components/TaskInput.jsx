import React, { useState } from 'react';

const TaskInput = ({ guardar }) => {
    const [tarea, setTarea] = useState("");

    const manejarEnvio = () => {
        guardar(tarea);
        setTarea('');
    };

    return (
        <div>
            <label htmlFor=''>Ingresar tarea</label>
            <input type="text" value={tarea} onChange={(e) => setTarea(e.target.value)}/>
            <button onClick={manejarEnvio}>Enviar</button>
        </div>
    );
};

export default TaskInput;

//TaskInput: Formulario para agregar nuevas tareas