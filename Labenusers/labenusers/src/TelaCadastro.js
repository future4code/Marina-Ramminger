import React from "react";
import axios from "axios";
import styled from "styled-components"


const TelaCadastro1 = styled.div`
    background-color: purple;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    justify-items: center;
    align-items: center;
    width: 100%;
    `


export default class TelaCadastro extends React.Component{
    state = {
         users: "",
         email: ""
    }

    handleUsersname = (e) => {
        this.setState({ users: e.target.value })
        };
      
    handleUsersemail = (e) => {
        this.setState({ email: e.target.value })
         };


         createUser = () => {
            const url =
              "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        
              const body = {
                name: this.state.users,
                email: this.state.email,
              }
        
            axios
              .post(url, body, {               
                headers: {
                Authorization: "marina-ramminger-maryam"
                }
              })

              .then((res) => {
                  alert("Usuário(a) cadastrado(a) com sucesso!")
                this.setState({ users: "", email: "" })
              })
              .catch((err) => {
                alert(err.response.data.message)
              })
          }
          
    render(){
        return (
            <TelaCadastro1>
                <button onClick={this.props.irListaUsuarios}> Ir para Lista de Usuários </button>
                <h2>CADASTRO</h2>

            <input placeholder={"Nome"}
                    value={this.state.users}
                    onChange={this.handleUsersname}/>
                    <p>

            <input placeholder={"E-mail"}
             value={this.state.email}
             onChange={this.handleUsersemail}/>
             </p>

            <button onClick={this.createUser}>Cadastrar Usuário</button>
            </TelaCadastro1>
        )
    }
}