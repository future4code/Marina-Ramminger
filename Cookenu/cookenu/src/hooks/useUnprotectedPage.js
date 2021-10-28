import {useHistory} from 'react-router-dom'
import { goToReceitas } from "../Componentes/Coordenadas";
import { useEffect } from "react"

const useUnprotectedPage = () => {
    const history = useHistory()
    useEffect (()=> {
        const token = localStorage.getItem('token')
    if (!token){
        goToReceitas(history)
    }
}, [history])
    }

    export default useUnprotectedPage