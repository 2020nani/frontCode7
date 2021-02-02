/*
    Dados da pagina
   * Nome : Code7
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 27/01/2021 - 02/02/2021
   
*/

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

export default api