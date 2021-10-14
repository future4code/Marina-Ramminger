import React from "react"
import { useHistory } from "react-router";

export const FormPage = () => {

    const history = useHistory()

    const goHome = () => {
        history.push("/")
    }

    const goBack = () => {
        history.goBack()
    }


    return (
        <div>
<h1> ApplicationFormPage.js → Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição </h1>
    <button onClick={goHome}> Ir para Home </button>
    <button onClick={goBack}> Voltar </button>
     </div>
    )
}


