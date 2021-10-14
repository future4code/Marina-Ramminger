import React from "react"
import { useHistory } from "react-router";

export const AdmHome = () => {

    const history = useHistory()

    const goCreateTrip = () => {
        history.push("/newtrip")
    }

    const goTripDetails = () => {
        history.push("/tripdetails")
    }

    const goHome = () => {
        history.push("/")
    }


    return (
        <div>
<h1> AdminHomePage.js → Para o administrador ver a lista de viagens e poder deletá-las ou 
    acessar o detalhe de cada uma delas</h1>
    <button onClick={goHome}> Ir para Home </button>
    <button onClick={goCreateTrip}> Criar nova viagem </button>
    <button onClick={goTripDetails}> Ver detalhes </button>
        </div>
    )
}

export default AdmHome;