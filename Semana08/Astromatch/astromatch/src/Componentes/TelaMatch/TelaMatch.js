import React, { useState, useEffect } from "react";
import {MatchContainer, Container } from './Styled';
import axios from "axios";

<h1> Tela Match Teste</h1>

const TelaMatch = (props) => {
    const [listaMatches, setMatchesList] = useState([]);
   
    const getMatchesList =() =>{
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marina-ramminger-maryam/matches")
        .then((res) => {
            console.log(res.data);
            setMatchesList(res.data.matches);
                  
                })
        .catch((err) => {
            console.log(err.response)
        });
    };
    useEffect(() => {
        getMatchesList();
     }, []);

     const matchsMap = listaMatches.map((profile) => {
         return (
             <MatchContainer key={profile.id}>
                 <p> {profile.name}, {profile.age}</p> 
                 <p> {profile.bio}</p>
             </MatchContainer>
         )
     })

//     //fazer função MAP//
/* //Dúvida: Por que aqui é profile? Qual nome coloco aqui? Por que não matches? */
//     )

const putClear =() => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marina-rammminger-maryam/clear")
.then((res) => {
    console.log(res.data);
})
.catch((err) => {
    console.log(err.response);
})
};

return (
    <div>
        <div>
            <button onClick={() => props.mudaTela("TelaIncial")}>Voltar</button>
        </div>
        <Container>
            <div>
                <h1> LISTA DE MATCHES</h1>
    {matchsMap}
            </div>
        </Container>
        <button onClick={putClear}> Limpar Matches</button>
    </div>
);
};

export default TelaMatch; 

