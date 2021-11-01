import React from "react"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export const RecipeCardContainer = styled(Card)`
  width: 220px;
  margin: 23px
`

export const RecipeCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`


const CardsReceita = (props) => {

    return (
        <RecipeCardContainer onClick={props.onClick}>
        <CardActionArea border={'2px solid black'}>
            <CardMedia
            component={'img'}
            alt={props.title}
            height={'150px'}
            image={props.image}
            title={props.title}
            />
            <RecipeCardContent>
            <Typography align={'center'}>
            <strong>
                {props.title.toUpperCase()}</strong>
            </Typography>
            </RecipeCardContent>
        </CardActionArea>
        </RecipeCardContainer>

    )
}

export default CardsReceita