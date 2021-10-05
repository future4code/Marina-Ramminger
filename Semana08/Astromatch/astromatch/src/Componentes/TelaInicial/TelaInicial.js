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
            console.log(err.response)
        })
    }


    return(
        <HomeContainer>
            <Profile>
                <img src={profile.photo}/>
                <h2>{profile.name}, {profile.age}</h2>
                <p> {profile.bio}</p>
            <div>
                <button> X </button>
                <button> ❤ </button>
            </div>
            </Profile>
        </HomeContainer>
    )
}