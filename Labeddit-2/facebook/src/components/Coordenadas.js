import React from "react";

export const goToLogin = (history) => {
    history.push("/login")
}

export const goToCadastro = (history) => {
    history.push("/cadastro")
}

export const goToFeed = (history) => {
    history.push("/")
}

export const goToDetalhesPost = (history) => {
    history.push("/detalhe/:id")
};