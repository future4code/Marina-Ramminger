import React from "react"
import { useHistory } from "react-router";

export const CreateTrip = () => {
    
    const history = useHistory()

    const goHome = () => {
        history.push("/")
    }

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
<h1> CreateTripPage.js → Formulário para o administrador criar uma nova viagem </h1>
    <button onClick={goHome}> Ir para Home </button>
    <button onClick={goBack}> Voltar </button>
        </div>
    )
}

export default CreateTrip;
