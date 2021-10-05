import React from "react";
import { TelaInicial } from "./Componentes/TelaInicial/TelaInicial";
import { TelaMatch } from "./Componentes/TelaMatch/TelaMatch";

export default class App extends React.Component{
  state ={
    telaAtual: "TelaInicial"
  };

  mudarTela = () => {
    switch (this.state.telaAtual){
      case "TelaInicial":
        return <TelaInicial />;
        case "TelaMatch":
          return <TelaMatch />
          default:
            return <TelaInicial />
    }
  };

  mudaTela = (nomeTela) => {
    this.setState({ telaAtual: nomeTela});
  };

  render() {
    return (
    <div>
<button onClick={() => this.mudaTela("TelaInicial")}>TelaInicial</button>
<button onClick={() => this.mudaTela("TelaMatch")}>TelaMatch</button>
{this.mudarTela()}
</div>
    );
  }
}