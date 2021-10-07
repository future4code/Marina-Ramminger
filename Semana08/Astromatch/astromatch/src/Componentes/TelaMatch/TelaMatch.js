import React, { useState } from "react";
import {MatchContainer, Image } from './Styled';
import axios from "axios"



export const TelaMatch = () => {
    const [matches, setMatchesList] = useState([])
   
    const getMatchesList =() =>{
    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marina-ramminger-maryam/matches")
        .then((res) => {
            const body = {
                matches: [
                    {
                        id: "",
                        age: "",
                        name: "",
                        bio: "",
                    }
                ]
                }
            })
        .catch((err) => {
            console.log(err)
        }) 
    }

    //fazer função MAP//
    
    return(
        <MatchContainer>
             <img src={matches.bio}/>
                <h2>{matches.name}, {matches.age}</h2>
                <p> {matches.bio}</p>
        </MatchContainer>
    )
}