import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import styled from "styled-components"
import { useHistory, useParams } from "react-router";
import { goToLogin, goToReceitas } from './Coordenadas';

const Logo = styled.img`
  height: 4.0rem;
  margin: 0.5rem;
`
const Botão = styled(Button)`
background-color: #ff6318;
color:black;
/* color: #3f51b5; */
border-radius: 20px;
font: impact;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-size: larger; 
width: 150px;
text-shadow:none;
`;
const StyledToolbar = styled(Toolbar) `
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Header = () => {
  const history = useHistory()

  return (
      <AppBar position="static">
        <StyledToolbar>
          <Botão
           Button onClick={() => goToReceitas(history)}><strong> COOKENU </strong>
          </Botão>
          <Botão
          Button onClick={() => goToLogin(history)} color="primary"><strong>LOGIN</strong></Botão>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header
