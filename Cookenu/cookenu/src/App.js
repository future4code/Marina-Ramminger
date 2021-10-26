import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AdicionarReceita from "./Páginas/AdicionarReceita";
import Cadastro from "./Páginas/Cadastro";
import DetalhesReceita from "./Páginas/DetalhesReceita";
import Login from "./Páginas/Login";
import Receitas from "./Páginas/Receitas";

const App = () => {
  return (
    < BrowserRouter >

      <Switch>
        <Route exact path={"/login"}>
          <Login />
        </Route>

        <Route exact path={"/cadastro"}>
          <Cadastro />
        </Route>

        <Route exact path={"/receitas"}>
          <Receitas />
        </Route>

        <Route exact path={"/detalhes"}>
          <DetalhesReceita />
        </Route>

        <Route exact path={"/novareceita"}>
          <AdicionarReceita />
        </Route>
      </Switch>
      
    </BrowserRouter >
  )
}

export default App 