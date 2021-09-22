import React from 'react';
import axios from "axios";
import styled from "styled-components"

const CardUsuario = styled.div`
border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    `


const Inicio = styled.div`
    background-color: purple;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    justify-items: center;
    align-items: center;
    width: 100%;
    `

  export default class ListaUsuários extends React.Component {
    state = {
        userlist: []
    }

    deleteUSer = (id) => {
    const url2 = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(url2, {
        headers: {
          Authorization: "marina-ramminger-maryam"
        }
      })
    .then((response) => {
      alert("Usuário(a) deletado(a) com sucesso!")
      this.getAllUserlist()
       })
    .catch ((error) => {
     alert("Ops! Ocorreu um erro. Tente novamente.") 
    //  (err.response.data)
    })
  }
    
  getAllUserlist = async() => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, {
      headers: {
      Authorization: "marina-ramminger-maryam"
    }
      })
      .then((res) => {
        this.setState({ userlist: res.data})
        console.log (this.state.userlist)
      })
      .catch((err) => {
        alert("Ops! Ocorreu um problema.");
      })
  }

  componentDidMount() {
    this.getAllUserlist()
  }

    render() {
        const listaUsers = this.state.userlist.map((user) => {
            console.log(user)
            return (
            <CardUsuario key={user.id}>{user.name}
            <button onClick={() => this.deleteUSer(user.id)}>Excluir</button>
            </CardUsuario>
            )
        }
        )

        
        return( 
        <Inicio>
          <button onClick={this.props.irTelaCadastro}> Ir para cadastro </button>
          <h2> Lista de Usuários </h2>
          {listaUsers}
      </Inicio>
        )
    }
}