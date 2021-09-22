
// import './App.css';
import React from "react";
import ListaUsuários from "./ListaUsuários"
import TelaCadastro from './TelaCadastro';


export default class App extends React.Component {
  state ={
    telaAtual: "cadastro"
  };

  escolheTela = () =>{
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irListaUsuarios={this.irListaUsuarios}/>
        case "lista":
          return <ListaUsuários irTelaCadastro={this.irTelaCadastro}/>
          default:
            return <div> Erro! Página não encontrada.</div>
    }
  }

irTelaCadastro  = () => {
  this.setState({telaAtual: "cadastro"})
}

irListaUsuarios = () => {
this.setState({telaAtual: "lista" })
}
  render() {
    return (
      <div>
        {this.escolheTela()}
      </div>

    )
  }
}
