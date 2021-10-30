import React from "react";
import styled from "styled-components"
import useForm from "../hooks/formulário";
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom'
import axios from "axios"

export const ContainerAdd = styled.div `
display:flex;
flex-direction: column;
align-items:center;
width:100vw;
font: impact;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`
export const TextoAdd = styled.div `
font: impact;
color: #3f51b5;
font-size: larger;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`

export const InputContainerAdd = styled.div `
display:flex;
flex-direction: column;
align-items:center;
width:80vw;
max-width:450px;
margin-bottom: 20px;
`
export const AddContainer = styled.div `
display:flex;
flex-direction: column;
align-items:center;
width:80vw;
max-width:450px;
margin-bottom: 20px;
border-radius: 20px;
text-shadow:none;
`

export const BotãoAdd = styled(Button)`
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
const url = 'https://cookenu-api.herokuapp.com'

const AdicionarReceita = () => {
const history = useHistory()
const [form, onChange, clear] = useForm({title: "", description: "", image: ""})

const criarReceita = (form, clear) => {
  axios.post(`${url}/recipe`, form, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then((response) => {
            alert(response.data.message)
            clear()
        })
        .catch((err) => alert(err.response.message))
        }
  

const onSubmitForm = (event) => {
event.preventDefault()
criarReceita(form, clear)
}
  
  return (
    <form onSubmit ={onSubmitForm}>
    <ContainerAdd>
      <TextoAdd>
   <h1> ADICIONAR RECEITA </h1>
    </TextoAdd>
    <InputContainerAdd>
    
         <TextField 
           name={"title"}
          value={form.title}
          onChange={onChange}
          label={"Título"}
          variant={"outlined"}
          border-radius={"20px"}
          fullWidth margin={"normal"}
          />
           <TextField 
           name={"description"}
          value={form.description}
          onChange={onChange}
          label={"Descrição"}
          variant={"outlined"}
          border-radius={"20px"}
          fullWidth margin={"normal"}
          required
          margin={"normal"}
          />

            <TextField 
           name={"image"}
          value={form.image}
          onChange={onChange}
          label={"Insira uma foto"}
          variant={"outlined"}
          fullWidth margin={"normal"}
          required
          margin={"normal"}
          />
    </InputContainerAdd>
    <BotãoAdd>
      <Button 
      color={"#3f51b5"}
      type={"submit"}> 
        <strong>Adicionar Receita</strong></Button>
      </BotãoAdd>
    </ContainerAdd>
    </form>
  )
}

export default AdicionarReceita 