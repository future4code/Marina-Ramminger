import React from "react";
import CardsReceita from "../Componentes/CardsReceita";
import useProtectedPage from "../hooks/useProtectedPage";
import useRequestData from "../hooks/useRequestData";
import Fab from "@material-ui/core/Fab";
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { goToAdicionarReceita, goToDetalhesReceita } from "../Componentes/Coordenadas";

export const ReceitasContainer = styled.div `
display: flex;
flex-direction: row;
flex-wrap: wrap;
background-color: #ff8b3d;
`

export const BotãoAdicionarReceita = styled(Fab) `
position: fixed !important;
right: 20px;
bottom: 20px;
z-index: 4;
`

const Receitas = () => {
  const history = useHistory()
 const recipes = useRequestData([], 'https://cookenu-api.herokuapp.com/recipe/feed')

 const onClickCard = (id) => {
  goToDetalhesReceita(history, id)
 }

const recipeCards = recipes.map((recipe) => {
  return (
    <CardsReceita 
    key={recipe.recipe_id}
    title={recipe.title}
    image={recipe.image}
    onClick={() => onClickCard(recipe.recipe_id)}
    />
  )
})

return (

  
  <ReceitasContainer>
     {recipeCards}
<BotãoAdicionarReceita
color={"primary"}
onClick={() => goToAdicionarReceita(history)}
   > <h1>+</h1>
     </BotãoAdicionarReceita>
  </ReceitasContainer>
    
  
)
}

export default Receitas