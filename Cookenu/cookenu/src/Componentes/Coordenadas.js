import React from "react";
import { useHistory, useParams } from "react-router";

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

export const goToDetalhesReceita = (history) => {
    history.push("/detalhe/:id")
};