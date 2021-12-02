import React from "react"
import { useHistory } from "react-router";

export const ListaTrips = () => {

    const history = useHistory()

    const goFormPage = () => {
        history.push("/form")
    }

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
<h1> ListTripsPage.js → Para vermos todas as viagens </h1>
    <button onClick={goFormPage}> Preencher Formulário </button>
    <button onClick={goBack}> Voltar </button>
        </div>
    )
}





