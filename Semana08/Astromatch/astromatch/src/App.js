import React, {useState} from "react";
import  TelaInicial from "./Componentes/TelaInicial/TelaInicial";
import TelaMatch from "./Componentes/TelaMatch/TelaMatch";


const App = () => {
  const [telaAtual, trocaTelaAtual] = useState("telaIncial");

  
  const mudarTela = () => {
    switch (telaAtual){
      case "TelaInicial":
        return <TelaInicial trocarTela={trocarTela} />;
        case "TelaMatch":
          return <TelaMatch trocarTela={trocarTela} />
          default:
            return "error";
    }
};

const trocarTela = (nomeTela) => {
  trocaTelaAtual(nomeTela);
};

return <div>{mudarTela()}</div>;
};

export default App;



// export default class App extends React.Component{
//   state ={
//     telaAtual: "TelaInicial"
//   };

//   };

//   mudaTela = (nomeTela) => {
//     this.setState({ telaAtual: nomeTela});
//   };

//   render() {
//     return (
//     <div>
// <button onClick={() => this.mudaTela("TelaInicial")}>TelaInicial</button>
// <button onClick={() => this.mudaTela("TelaMatch")}>TelaMatch</button>
// {this.mudarTela()}
// </div>

//     );
//   }
// }