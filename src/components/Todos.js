import react from "react";
import { useState } from "react";

export default function Todos({ item, onUpdate, onDelete }){

  const [editar, setEditar] = useState(false);
  const [newValue, setNewValue] = useState(item.tarea);

  function FormEditar (){

    function handleSubmit (e){
      e.preventDefault(); // Esto es para que la pagina no se actualize al meter datos.
    }

    function handleChange (e){
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickUpdateTodo (e){
      onUpdate(item.id, newValue);
      setEditar(false);
    }

    return(
      <form className="todo-actualizar" onSubmit={handleSubmit}>
        <input type="text" className="input-todo" onChange={handleChange} value={newValue}/>
        <button onClick={handleClickUpdateTodo} className="boton-actualizar">Actualizar</button>
      </form>
    );
  }

  return (

    <div className="todo"> 
      {
        editar ? (<FormEditar />) : 
    (<div>
      <span className="tarea" >{item.tarea}</span>  
      <button className="boton-editar"  onClick={() => setEditar(true)}>Editar</button>
      <button className="boton-eliminar"  onClick={(e) => onDelete(item.id)}>Eliminar</button>
    </div>)
    }
    </div>
  );
}