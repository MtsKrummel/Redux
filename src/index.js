import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux'

//Si bien ya tengo un contexto(Provider) en donde la aplicación va a poder consultar siempre, no sabemos qué es lo que va a consultar. Por eso debemos especificar dentro de <Provider> nuestro store
//<Provider>
//  <App />
//</Provider>

//El Provider es importante por que es el componente al cual se registran los componentes para recibir las actualizaciones cuando el store cambie, es por este motivo que cualquier componente que quiera registrarce al store, tendrá que ser descendiente de Provider.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

