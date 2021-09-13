import React from "react";
import styled from "styled-components";



export default class Etapa3 extends React.Component {
    render() {
      return (
        <div className="Tela-Inicial-3">
          <h1> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h1>
          <h2>7. Por que você não terminou um curso de graduação?</h2>
          <input 
          value={this.props.inputCursoGraduação}
          onChange={this.props.onChangeCursoGraduação}
          placeholder="Curso Graduação" />
  
  <h2>8. Você fez algum curso complementar?</h2>
  <select
value={this.props.inputCursoComplementar}
onChange={this.props.onChangeCursoComplementar}
placeholder="Curso Complementar"
>
        <option>Nenhum </option>
        <option>Curso Técnico </option>
        <option>Curso Inglês </option>

        </select>
  <p>
        <button onClick={this.props.botaoEtapa}>Próxima Etapa</button> </p>
</div>
      );
    }
}