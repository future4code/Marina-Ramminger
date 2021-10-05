import React from "react";
import {MatchContainer, Image } from './Styled'

export const TelaMatch = () => {
    return(
        <MatchContainer>
            <Image src={"https://picsum.photos/50/50?=1"}/>
            <h2>Nome da Pessoa</h2>
        </MatchContainer>
    )
}