import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() !== '') {
      addTask(texto);
      setTexto('');
    }
  };

    return(
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Agregar tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
    );
}

export default TaskInput;

//TaskInput: Formulario para agregar nuevas tareas