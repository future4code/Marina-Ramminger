import React, { useEffect, useState } from "react";
import { HomeContainer, Profile, ProfileImage } from "./Styled";
import axios from "axios"



export const TelaInicial = () => {
    const [profile, setProfile] = useState ({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marina-ramminger-maryam/person"
   
    useEffect (() => {
        getProfile()
    }, [])
    
    const getProfile = () => {
        axios.get(url)
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            console.log(err);
        })
    };

    useEffect(() => {
        getProfile();
    }, []);

    const choosePerson = (choosePerson) => {
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marina-ramminger-maryam/choose-person")
        .then((res) => {
            const body = {
                id: profile.id,
                choice: true
            }
        })
        .catch((err) => {
            console.log(err)
        }) 
    }


    return(
        <HomeContainer>
            {!profile ? <div>Acabaram os perfis!</div> :
            <Profile>
                <img src={profile.photo}/>
                <h2>{profile.name}, {profile.age}</h2>
                <p> {profile.bio}</p>
            <div>
                <button onClick={() => choosePerson(false)}> X </button>
                <button onClick={() => choosePerson(true)}> ❤ </button>
            </div>
            </Profile>
} 
        </HomeContainer>
    )
}