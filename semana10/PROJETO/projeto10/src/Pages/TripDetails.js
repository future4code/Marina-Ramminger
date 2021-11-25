import React, { useEffect } from "react"
import { useHistory } from "react-router";
import axios from "axios";

export const TripDetails = () => {
     useEffect(() => {
          const token = localStorage.getItem('token')
          axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/marina-ramminger-maryam/trip/:id', {
               headers: {
                    auth: token,
               } 
          })
          .then((response) => {
               console.log(response.data)
          }).catch((error) => {
               conseole.log(error.response)
          })
          }, [])
     

     
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