import { useState } from "react";


export const useForm = ( initialForm = {} ) => {


    const [formState, setFormState] = useState( initialForm );


    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]:value
        })

    }

    //para resetear formularios
    //lo unico que hay que hacer es hacer una funcion en el
    //custom hook y establecer el setFormState con sus
    //valores iniciales
    const onResetForm = () => {
        setFormState( initialForm )
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }


}
