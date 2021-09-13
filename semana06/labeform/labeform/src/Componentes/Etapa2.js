import React from "react";
import styled from "styled-components";



export default class Etapa2 extends React.Component {
    render() {
      return (
        <div className="Tela-Inicial-2">
          <h1> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </h1>
          <h2>5. Qual o curso?</h2>
          <input 
          value={this.props.inputCurso}
          onChange={this.props.onChangeCurso}
          placeholder="Curso" />
  
  <h2>6. Qual a instituição de ensino?</h2>
          <input 
          value={this.props.inputEnsino}
          onChange={this.props.onChangeEnsino}
          placeholder="Ensino" />
  
  <p>
  <button onClick={this.props.botaoEtapa}>Próxima Etapa</button> </p>
</div>
      );
    }
}
