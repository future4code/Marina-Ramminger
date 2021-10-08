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
                 <img src={profile.photo} alt="Imagem do perfil" />
                 <h4> {profile.name}, {profile.age}</h4> 
             </MatchContainer>
         )
     })

const putClear =() => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marina-ramminger-maryam/clear")
.then((res) => {
    console.log(res.data);
    setMatchesList([]) //para limpar automaticamente sem precisar atualizar. Muda o estado atual para um array vazio (sem matchs). 
})
.catch((err) => {
    console.log(err.response);
})
};

return (
    <div>
        <Container>
            <div>
                <h2> Essa é sua lista de likes!</h2>
    {matchsMap}
            </div>
        </Container>
        <button onClick={putClear}> Limpar Matches</button>
        <button onClick={() => props.trocarTela("TelaInicial")}>
                    Voltar para perfis
                </button>
    </div>
);
};

export default TelaMatch; 

