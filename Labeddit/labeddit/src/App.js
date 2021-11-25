import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Feed from "./Páginas/Feed";
import Login from "./Páginas/Login";
import Cadastro from "./Páginas/Cadastro";
import DetalhesPost from "./Páginas/DetalhesPost";
import Header from "./Componentes/Header";
import theme from "./Componentes/theme";


const App = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <Header>

    < BrowserRouter >
      <Switch>
        <Route exact path={"/login"}>
          <Login />
        </Route>

        <Route exact path={"/cadastro"}>
          <Cadastro />
        </Route>

        <Route exact path={"/"}>
          <Feed />
        </Route>

        <Route exact path={"/detalhe/:id"}>
          <DetalhesPost />
        </Route>
      </Switch>
      
    </BrowserRouter >
    </Header>
    </ThemeProvider>
  )
}

export default App