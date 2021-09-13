import logo from './logo.svg';
import './App.css';
import Etapa1 from './Componentes/Etapa1';
import Etapa2 from './Componentes/Etapa2';
import Etapa3 from './Componentes/Etapa3';
import EtapaFinal from './Componentes/EtapaFinal';



function App() {
  return <div>
    <h4>
    <button>Próxima Etapa</button>
    </h4>
  </div>
}

export default App;


export default class App extends React.Component {
  state = {
    etapa: 1
  }

  alteraEtapa = () => {
    switch (this.state.etapa) {
      case 1: 
        return <Etapa1 />;
      case 2: 
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <EtapaFinal />;
    }
  }

  proximasEtapas = () => {
    this.setState({etapa:this.state.etapa + 1})
  }

  render () {
      return (
        <div className = "inicial">
        {alteraEtapa()}
        </div>
      );
    }

    
      };
