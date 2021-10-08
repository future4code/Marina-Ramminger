import React, {useState} from "react";
import  TelaInicial from "./Componentes/TelaInicial/TelaInicial";
import TelaMatch from "./Componentes/TelaMatch/TelaMatch";


const App = () => {
  const [telaAtual, trocaTelaAtual] = useState("TelaInicial");

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
