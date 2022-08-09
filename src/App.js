import React from 'react';
import TodoApp from './components/TodoApp';
import "./styles/TodoApp.css"
import Imagen from './images/RAPID CHANGES PNG.png'

function App() {
  return (
    <div className="App">
      <img src={Imagen} alt='Logo' className='imagen-logo'/>
      <TodoApp />
    </div>
  );
}

export default App;
