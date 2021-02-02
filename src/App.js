/*
    Dados da pagina
   * Nome : Code7
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 27/01/2021 - 02/02/2021
   
*/

import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom';
import Routes from './routes/index';
import history from './services/history';
import { store, persistor } from './store'
import Globalstyles from './styles/global'



export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Router history={history}>
        <Routes />
        <Globalstyles />
        < ToastContainer  autoClose={3000} />
      </Router>
      </PersistGate>
    </Provider>
  );
}
