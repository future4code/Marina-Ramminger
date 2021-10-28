import React, {useState} from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./Componentes/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import AdicionarReceita from "./Páginas/AdicionarReceita";
import Cadastro from "./Páginas/Cadastro";
import DetalhesReceita from "./Páginas/DetalhesReceita";
import Login from "./Páginas/Login";
import Receitas from "./Páginas/Receitas";

const App = () => {
  const token = localStorage.getItem("token")
  const [buttonLogin, setButtonLogin] = useState(token ? "Logout" : "Login")


  return (

    <ThemeProvider>

    < BrowserRouter >
    <Header
    buttonLogin={buttonLogin}
    setButtonLogin={setButtonLogin}
    color={"primary"} />

      <Switch>
        <Route exact path={"/login"}>
          <Login   
      buttonLogin={buttonLogin}
      setButtonLogin={setButtonLogin}/>
        </Route>

        <Route exact path={"/cadastro"}>
          <Cadastro  
      buttonLogin={buttonLogin}
      setButtonLogin={setButtonLogin}/>
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