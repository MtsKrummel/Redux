import './App.css';

//useDispatch permite acceder a cualquier store pero esta vez para actualizar algo. En lugar de recibir una función, a useDispatch le pasamos el nombre de la store. 
//useDispatch retorna todas las funciones del store que le digamos

//useSelector recibe una función que devolverá cualquier cosa que permita recuperar un dato, campo o atributo del post que se está editando.
//useSelector es un Hook que nos permite extraer datos del store de Redux utilizando una función selectora, ésta debe ser pura ya que es potencialmente invocada múltiples veces.

//En resumen, useDispatch se utiliza para enviar acciones al almacén Redux para actualizar el estado global, mientras que useSelector se utiliza para acceder y suscribirse a porciones específicas del estado global para que los componentes puedan reaccionar a cambios en esos datos. 
// useDispatch: para enviar información al store.
// useSelector: para obtener información del store.
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const taskState = useSelector(state => state.tasks)
  console.log(taskState)
  
  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
