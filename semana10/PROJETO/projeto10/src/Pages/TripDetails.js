import React from "react"
import { useHistory } from "react-router";

export const TripDetails = () => {

     
    const history = useHistory()

    const goHome = () => {
        history.push("/")
    }

    const goBack = () => {
        history.goBack()
    }


    return (
        <div>
<h1>TripDetailsPage.js → Para o administrador ver o detalhe de uma viagem específica,
     bem como os candidatos que aplicaram para ela</h1> 
     <button onClick={goHome}> Ir para Home </button>
    <button onClick={goBack}> Voltar </button>
        </div>
    )
}

export default TripDetails;