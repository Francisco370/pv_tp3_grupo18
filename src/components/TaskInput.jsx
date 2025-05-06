import { useState } from 'react';

const TaskInput = ({ addTask }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDeFault();
        if(input.trim() !== ''){
            addTask(input);
            setInput('');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Nueva tarea' value={input} onChange={(e) => setInput(e.target.value)}/>
            <button type='submit'>Agregar</button>
        </form>
    );
}

export default TaskInput;

//TaskInput: Formulario para agregar nuevas tareas