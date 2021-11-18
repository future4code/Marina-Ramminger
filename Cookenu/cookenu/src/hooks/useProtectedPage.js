import {useHistory} from 'react-router-dom'
import { goToLogin } from "../Componentes/Coordenadas";
import { useEffect } from "react"

const useProtectedPage = () => {
    const history = useHistory()
    useEffect (()=> {
        const token = localStorage.getItem('token')
    if (!token){
        goToLogin(history)
    }
}, [history])
    }

    export default useProtectedPage