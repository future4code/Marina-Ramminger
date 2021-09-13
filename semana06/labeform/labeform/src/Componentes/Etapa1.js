import { findByLabelText } from "@testing-library/dom";
import React from "react";
import styled from "styled-components";

export default class Etapa1 extends React.Component {
  render() {
    return (
      <div className="Tela-Inicial">
        <h1> ETAPA 1 - DADOS GERAIS </h1>
        <h2>1. Qual o seu nome?</h2>
        <input 
        value={this.props.inputNome}
        onChange={this.props.onChangeNome}
        placeholder="Nome" />

<h2>2. Qual a sua idade?</h2>
        <input 
        value={this.props.inputIdade}
        onChange={this.props.onChangeIdade}
        placeholder="Idade" />

<h2>3. Qual o seu e-mail?</h2>
        <input 
        value={this.props.inputEmail}
        onChange={this.props.onChangeEmail}
        placeholder="E-mail" />

<h2>4. Qual a sua escolaridade?</h2>
        <select
        value={this.props.inputEscolaridade}
        onChange={this.props.onChangeEscolaridade}
        placeholder="Escolaridade"
        >

        <option>Ensino Médio Inompleto </option>
        <option>Ensino Médio Completo </option>
        <option>Ensino Superior Incompleto </option>
        <option>Ensino Superior Completo </option>

        </select>

        <p>

          <button onClick={this.props.botaoEtapa}>Próxima Etapa</button>
          </p>
</div>
    );
  }
} 