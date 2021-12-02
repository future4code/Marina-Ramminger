import React from "react";
import { useHistory } from "react-router";

export const Home = () => {
    const history = useHistory()

    const goListaTrips = () => {
        history.push("/listrips")
    }

    const goLogin = () => {
        history.push("/login")
    }

    return (
        <div>
<h1> HomePage.js  → Para o usuário escolher entre Área Administrativa e Lista de Viagens </h1>
        <button onClick={goListaTrips}> Lista de Viagens </button>
        <button onClick={goLogin}> Login </button>
        </div>
    )
}



