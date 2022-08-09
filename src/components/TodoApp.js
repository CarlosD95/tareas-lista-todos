import react from "react";
import { useState } from "react";
import Todos from "./Todos"
import "../styles/TodoApp.css"

export default function TodoApp(){

  const [titulo, setTitulo] = useState(''); // Valor inicial del useState 
  const [todos, setTodos] = useState([]);


  function handleChange (e){
    const value = e.target.value;
    setTitulo(value);
  }

  function handleSubmit (e){
    e.preventDefault();

    const nuevoTodo = {
      id: crypto.randomUUID(),
      tarea: titulo,
      completada: false,
    }

    const temp = [...todos];
    temp.unshift(nuevoTodo);
    setTodos(temp);
    setTitulo("");
  }

  function handleUpdate (id,value){
    const temp = [...todos];
    const item = temp.find(item => item.id = id);
    item.tarea = value;
    setTodos(temp);
  }

  function handleDelete(id){
    const temp = todos.filter(item => item.id != id);
    setTodos (temp);
  }

  return (
    <div className="contenedor-principal">
      <form className="crear-formulario" onSubmit={handleSubmit}>
        <input className="input-todo" value={titulo} onChange={handleChange} />
        <input type="submit" value="Enviar" className="boton-crear"
          onClick={handleSubmit} />
      </form>
      <div className="lista-todos">
        {todos.map(item => (
          <Todos key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />))}
      </div>
    </div>
  );
}