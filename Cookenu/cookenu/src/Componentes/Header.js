import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from "../Assents/logo.jpg"
import styled from "styled-components"
import { useHistory, useParams } from "react-router";
import { goToLogin, goToReceitas } from './Coordenadas';

const Logo = styled.img`
  height: 3.5rem;
  margin: 0.5rem;
`
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
          <Typography>
          </Typography>
          <Button onClick={() => goToReceitas(history)} type="submit"> 
          <Logo src={logo} />
          </Button>
          <Button onClick={() => goToLogin(history)} color="inherit">LOGIN</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header
