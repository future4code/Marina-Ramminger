import React from "react";
import styled from "styled-components"
import useForm from "../hooks/formulário";
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom'
import { goToCadastro } from "../Componentes/Coordenadas";

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
`
export const BotãoLogin = styled(Button)`
background-color: #ff6318;
color:black;
/* color: #3f51b5; */
border-radius: 20px;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-size: larger; 
width: 150px;
text-shadow:none;
width:80vw;
max-width:450px;
`;

const Login = () => {
  const history = useHistory()

  const [form, onChange, clear] = useForm({email:"", password:""})

  const onSubmitForm = (event) => {
    event.preventDefault()
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
          <Button> 
            <strong>Fazer Login</strong></Button>
         </BotãoLogin>

         </form>
         </InputContainer>

         <LoginFormContainer>
    
           <Button onClick ={() => goToCadastro(history)}
           type={"submit"}
           fullWidth
           variant={"text"}
           color={"black"}> <strong>Não possui conta? Cadastre-se</strong></Button>

</LoginFormContainer>
          
    </LoginContainer>
  )
}

export default Login 