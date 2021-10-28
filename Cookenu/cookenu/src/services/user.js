import axios from "axios"
import { goToReceitas } from "../Componentes/Coordenadas"


  export const login = (body, clear, history) => {
    axios.post('https://cookenu-api.herokuapp.com/user/login', body)
    .then((res)=> {
      localStorage.setItem('token', res.data.token)
      clear()
      goToReceitas(history)
    })
    .catch((err)=>alert("Erro!"))
  }

  
  export const signUp = (body, clear, history) => {
    axios.post('https://cookenu-api.herokuapp.com/user/signup', body)
    .then((res)=> {
      localStorage.setItem('token', res.data.token)
      clear()
      goToReceitas(history)
    })
    .catch((err)=>alert("Erro!"))
  }