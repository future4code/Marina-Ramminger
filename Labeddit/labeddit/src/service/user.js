import axios from "axios"
import { goToFeed } from "../Componentes/Coordenadas"


  export const loginLabe = (body, clear, history) => {
    axios.post('https://labeddit.herokuapp.com//userslogin', body)
    .then((res)=> {
      localStorage.setItem('token', res.data.token)
      clear()
      goToFeed(history)
    })
    .catch((err)=>alert("Erro!"))
  }

  
  export const signUp = (body, clear, history) => {
    axios.post('https://labeddit.herokuapp.com/users/signup', body)
    .then((res)=> {
      localStorage.setItem('token', res.data.token)
      clear()
      goToFeed(history)
    })
    .catch((err)=>alert("Erro!"))
  }