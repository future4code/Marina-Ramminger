import React from "react"
import { useParams, useHistory} from 'react-router-dom'
import styled from "styled-components"
import useRequestData from "../hooks/useRequestData"
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'

export const RecipeImage = styled.img `
width: 50vw;
max-width: 500px;
min-width: 250px;
border-radius: 20px;
margin-bottom: 20px;
margin-top: 30px;
`
export const ScreenContainer = styled.div `
background-color: #ff8b3d;
display: flex;
align-items: center;
justify-content: center; 
width: auto;
`
export const RecipeContainer = styled.div `
display: flex;
flex-direction: column;
width: 60vw;
max-width: 500px;
min-width: 250px;
`
export const BotãoDetalhes = styled.div `
position: fixed;
right: 50px;
bottom: 20px;
z-index: 3;
`

const DetalhesReceita = () => {
  const history = useHistory()
  const params = useParams()
  const recipe = useRequestData ([], `https://cookenu-api.herokuapp.com/recipe/${params.id}`) [0]
 
  const goBack = () => {
    history.goBack();
  }
 
    return ( 
      <ScreenContainer>
        { recipe &&
        <RecipeContainer>
          <RecipeImage src={recipe.image}/>
          <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>
          <strong>{recipe.title} </strong></Typography>
            <Typography align={'center'}>{recipe.description}</Typography>
     </RecipeContainer>}
     <BotãoDetalhes>
     <Button variant="contained" color="primary" gutterBottom align={'center'} onClick={() => goBack()}>Voltar</Button>
  </BotãoDetalhes>
      </ScreenContainer>
           
    )
  }
  
  export default DetalhesReceita 