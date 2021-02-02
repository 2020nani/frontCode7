/*
    Dados da pagina
   * Nome : Code7
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 27/01/2021 - 02/02/2021
   
*/

import React, { useState, useEffect } from 'react';
import Header from '../../components/Header'
import SalvarDivida from '../../components/salvarDivida';
import EditarDivida from '../../components/editarDivida';
import { Container, ListarDividas, Conteudo, ListButton, Formulario, ButtonSalvar } from '../Home/styles'
import api from '../../services/api'


export default function Home() {
  const [dividas, setDividas] = useState([]);
  const [pessoas, setPessoas] = useState([]);
  const [viewSalvarEditar, setViewSalvarEditar] = useState(true)
  const [editDivida, setEditDivida] = useState(false);
  const [idPessoa, setIdPessoa] = useState();
  const [dividaPessoa, setDividaPessoa] = useState([])
  /* funcao para usar reducer e somar todos valores de um array */
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  /* instancia todos os objetos dividas salvas banco de dados na constante dividas */
  useEffect(() => {
    async function listarDividas() {
      const response = await api.get(`dividas`);
      setDividas(response.data)

    }

    listarDividas()
  }, [])

  /* instancia todos os objetos Pessoas salvas na api JsonPlaceHolder na constante pessoas */
  useEffect(() => {
    async function listarPessoas() {
      const response = await api.get('https://jsonplaceholder.typicode.com/users');
      setPessoas(response.data)


    }
    listarPessoas()
  }, [])

  /* Instancia variavel boolean viewSalvarEditar para mostrar componente salvarDivida na pagina */
  async function viewSalvarDivida() {
    { viewSalvarEditar === false ? setViewSalvarEditar(true) : setViewSalvarEditar(true) }
  }

  /* Instancia variavel boolean viewSalvarEditar para mostrar componente editarDivida na pagina */
  async function viewEditarDivida(divida) {

    setDividaPessoa(divida)
    { viewSalvarEditar === true ? setViewSalvarEditar(false) : setViewSalvarEditar(false) }
  }
  
  return (

    <Container>
      <Header />
      <Conteudo>

        <ListarDividas>
          {pessoas.map(pessoa => (
            dividas.map(divida => (
              pessoa.id == divida.usuarioId ?

                <ListButton>
                  <button type="button" onClick={() => (
                    setEditDivida(editDivida == true ? false : true),
                    setViewSalvarEditar(true),
                    setIdPessoa(pessoa.id)
                  )}>
                    {pessoa.name}  R${divida.valorDivida.reduce(reducer)} </button>

                  {editDivida === true && divida.usuarioId == idPessoa ?

                    <div>
                      {divida.valorDivida.map(valor => (
                        <button type="button" onClick={() => viewEditarDivida(divida)}>
                          {valor}</button>
                      ))}

                    </div>
                    : <div></div>
                  }
                </ListButton>
                : null
            ))
          ))}
        </ListarDividas>

        <Formulario>
          {viewSalvarEditar === true ?
            <SalvarDivida></SalvarDivida>
            :
            <EditarDivida>{dividaPessoa}</EditarDivida>
          }

        </Formulario>

      </Conteudo>
      <ButtonSalvar>
        <button type="button" onClick={() => viewSalvarDivida()}>Cadastrar Nova Divida</button>
      </ButtonSalvar>
    </Container>

  );

}

