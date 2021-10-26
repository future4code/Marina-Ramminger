import React, { useState } from "react"
import { useHistory } from "react-router";
import axios from "axios";

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");

    const onChangeEmail = (event) => {
        setEmail (event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword (event.target.value);
    };

    const onSubmitLogin = () => {
        console.log(email, password);
        const body = {
            email: email,
            password: password
        }
        axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/marina-ramminger-maryam /login",
            body
            )
        .then((response) => {
            console.log(response.data.token);
            localStorage.setItem('token', response.data.token)
        })
        .catch((error) => {
            console.log(error.response)
        })
        };
    
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }


    return (
        <div>
<h1> LoginPage.js → Para fazermos login como administrador </h1>
    <input 
    placeholder = "email"
    type="email"
    value={email}
    onChange={onChangeEmail} />

    <input
    placeholder="password"
    type="password"
    value={password}
    onChange={onChangePassword} />
    <button onClick={onSubmitLogin}>Enviar</button>
    
    <button onClick={goBack}> Voltar </button>
      </div>
    )
}


export default Login; 