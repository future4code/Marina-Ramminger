import React, { useEffect, useState } from "react";
import { HomeContainer, Profile} from "./Styled";
import axios from "axios"



    const TelaInicial = (props) => {
    const [profile, setProfile] = useState ({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marina-ramminger-maryam/person"

    const getProfile = () => {
        axios.get(url)
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            console.log(err.response);
        })
    };

    useEffect(() => {
        getProfile();
    }, []);

    const choosePerson = (choosePerson) => {
        const body = {
            id: profile.id,
            choice: choosePerson,
        };
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marina-ramminger-maryam/choose-person",
        body)
        .then((res) => {
            console.log(res.data);
            getProfile();
           
        })
        .catch((err) => {
            console.log(err.response)
        });
    };


    return(
        <HomeContainer>
            <Profile>
                <h1> ASTRO-MATCH</h1>
                <h4> Encontre a pessoa que mais combine com você!</h4>
                { <img src={profile.photo} alt="Imagem do perfil"/>}
                <h2>{profile.name}, {profile.age}</h2>
                <p> {profile.bio}</p>
            <div>
                <button onClick={() => choosePerson(false)}> X </button>
                <button onClick={() => choosePerson(true)}> ❤ </button>
            </div>
            </Profile>
            <div>
                <button onClick={() => props.trocarTela("TelaMatch")}>
                    Ir para Matches
                </button>
            </div>
        </HomeContainer>
    )
};

export default TelaInicial; 

// {!profile ? <div>Acabaram os perfis!</div> :