import React from "react";

export const goToLogin = (history) => {
    history.push("/login")
}

export const goToCadastro = (history) => {
    history.push("/cadastro")
}

export const goToReceitas = (history) => {
    history.push("/")
}

export const goToAdicionarReceita = (history) => {
    history.push("/novareceita")
}

export const goToDetalhesReceita = (history, id) => {
    history.push(`/detalhe/${id}`)
};
