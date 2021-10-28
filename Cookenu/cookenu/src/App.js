import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Componentes/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import AdicionarReceita from "./Páginas/AdicionarReceita";
import Cadastro from "./Páginas/Cadastro";
import DetalhesReceita from "./Páginas/DetalhesReceita";
import Login from "./Páginas/Login";
import Receitas from "./Páginas/Receitas";

const App = () => {
  return (

    <ThemeProvider>

    < BrowserRouter >
    <Header
    color={"primary"} />

      <Switch>
        <Route exact path={"/login"}>
          <Login />
        </Route>

        <Route exact path={"/cadastro"}>
          <Cadastro />
        </Route>

        <Route exact path={"/"}>
          <Receitas />
        </Route>

        <Route exact path={"/detalhe/:id"}>
          <DetalhesReceita />
        </Route>

        <Route exact path={"/novareceita"}>
          <AdicionarReceita />
        </Route>
      </Switch>
      
    </BrowserRouter >
    </ThemeProvider>
  )
}

export default App 