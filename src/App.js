import './App.css';

//useDispatch permite acceder a cualquier store pero esta vez para actualizar algo. En lugar de recibir una función, a useDispatch le pasamos el nombre de la store. 
//useDispatch retorna todas las funciones del store que le digamos

//useSelector recibe una función que devolverá cualquier cosa que permita recuperar un dato, campo o atributo del post que se está editando.
//useSelector es un Hook que nos permite extraer datos del store de Redux utilizando una función selectora, ésta debe ser pura ya que es potencialmente invocada múltiples veces.

//En resumen, useDispatch se utiliza para enviar acciones al almacén Redux para actualizar el estado global, mientras que useSelector se utiliza para acceder y suscribirse a porciones específicas del estado global para que los componentes puedan reaccionar a cambios en esos datos. 
// useDispatch: para enviar información al store.
// useSelector: para obtener información del store.
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
