import React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Cadastro from "./Pages/Cadastro";
import Feed from "./Pages/Feed";
import Login from "./Pages/Login";
import DetalhesPost from "./Pages/DetalhesPost";


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

        <Route exact path={"/"}>
          <Feed />
        </Route>

        <Route exact path={"/detalhe/:id"}>
          <DetalhesPost />
        </Route>
      </Switch>
      
    </BrowserRouter >
    
  
  )
}

export default App