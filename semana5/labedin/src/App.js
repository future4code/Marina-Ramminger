import React from 'react';
import './App.css';
import styled from 'styled-components';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

const Estilo = styled.div `
display: flex;
justify-content: auto;
border: 1px solid black;
 `;

 
const Estilo2 = styled.div `
display: flex;
justify-content: auto;
border: 1px solid black;
margin-top: 5px;
 `;

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="IMG-4990.png" 
          nome="Marina Ramminger Pereira" 
          descricao="Oi, eu sou a Marina. Sou formanda em Gestão Pública e, passado um tempo, resolvi me aventurar pela área de programação."
        />
        <Estilo>
        <CardPequeno
        item="E-mail:"
        resposta="ramminger.marina@gmail.com"
        />
          </Estilo>

          <Estilo2>
         <CardPequeno
        item="Endereço:"
        resposta="Lima e Silva, 250"
        />
        </Estilo2>
      

        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
