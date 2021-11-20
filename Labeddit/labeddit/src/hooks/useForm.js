import { useState } from "react";

const useForm =(inicial) => {
    const [form, setForm] = useState(inicial)

    const hadleInputChange = (event) => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }

    const clear = () => {
        setForm(inicial)
    }

    return [form, hadleInputChange, clear]

}

export default useForm