import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";
import ListaUsuários from "./ListaUsuários"

const headers = {
  headers: {
    Authorization: "marina-ramminger-maryam"
  }
};


export default class App extends React.Component {
  state = {
    users: "",
    email: "",
    home: true
  };

  // }

  // logaUsuario = () => {
  //   this.setState({ home: true });
  // };

  // deslogaUsuario = () => {
  //   this.setState({ home: false });
  // };

  // renderizaPagina = () => {
  //   if (this.state.home) {
  //     return <Home deslogaUsuario={this.deslogaUsuario} />;
  //   } else {
  //     return <Login logaUsuario={this.logaUsuario} />;
  //   }
  // };

  handleUsersname = (e) => {
    this.setState({ users: e.target.value });
  };

  handleUsersemail = (e) => {
    this.setState({ email: e.target.value });
  };

  createUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

      const body = {
        name: this.state.users,
        email: this.state.email,
      };

    axios
      .post(url, body, headers)
      .then((res) => {
        this.setState({ users: "", email: "" });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };



  render() {
  

    return (
      <div>
        <h1>LABENUSERS</h1>
        <input
          placeholder="Nome"
          value={this.state.name}
          onChange={this.handleUsersname}
        />
        <br/>
        <input
        placeholder="E-mail"
        value={this.state.email}
        onChange={this.handleUsersemail}
        />
      

        <button onClick={this.createUser}>Enviar</button>
<p>
        <ListaUsuários />
        </p>
      </div>

      
    );
  }
}
