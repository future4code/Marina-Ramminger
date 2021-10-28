import React from "react";
import styled from "styled-components"
import useForm from "../hooks/formulário";
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom'
import { goToCadastro, goToReceitas } from "../Componentes/Coordenadas";
import { login } from "../services/user";
import useUnprotectedPage from "../hooks/useUnprotectedPage";

export const LoginContainer = styled.div `
display:flex;
flex-direction: column;
align-items:center;
width:100vw;
font: impact;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`
export const Texto = styled.div `
font: impact;
color: #3f51b5;
font-size: larger;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`

export const InputContainer = styled.div `
display:flex;
flex-direction: column;
align-items:center;
width:80vw;
max-width:450px;
margin-bottom: 20px;
`
export const LoginFormContainer = styled.div `
display:flex;
flex-direction: column;
align-items:center;
width:80vw;
max-width:450px;
margin-bottom: 20px;
border-radius: 20px;
text-shadow:none;
`
export const BotãoLogin = styled(Button)`
background-color: #ff6318;
color:#3f51b5;
/* color: #3f51b5; */
border-radius: 20px;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-size: larger; 
width: 150px;
text-shadow:none;
width:80vw;
max-width:450px;
margin-top: 30px;
`;

const LoginForm = () => {
  useUnprotectedPage()
  const history = useHistory()

  const [form, onChange, clear] = useForm({email:"", password:""})

  const onSubmitForm = (event) => {
    event.preventDefault()
   login(form, clear, history)
  }

  return (
    <LoginContainer>
      <Texto>
      <h1> ÁREA DO USUÁRIO </h1>
      </Texto>
         <InputContainer>
         <form onSubmit ={onSubmitForm}>
           <TextField 
           name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"outlined"}
          border-radius={"20px"}
          fullWidth margin={"normal"}
          required
          type={"email"}
          />

            <TextField 
           name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Senha"}
          variant={"outlined"}
          fullWidth margin={"normal"}
          required
          type={"password"}/>
  <BotãoLogin>
  
          <Button
          color={"#3f51b5"}
          type={"submit"}> 
            <strong>Fazer Login</strong></Button>
         </BotãoLogin>

         </form>
         </InputContainer>

         <LoginFormContainer>
    <p>
           <Button onClick ={() => goToCadastro(history)}
           fullWidth
           variant={'contained'}
           color={"inherit"}
          //  color={"black"}
           > <strong>Não possui conta? Cadastre-se</strong></Button>
</p>
</LoginFormContainer>
          
    </LoginContainer>
  )
}

export default LoginForm