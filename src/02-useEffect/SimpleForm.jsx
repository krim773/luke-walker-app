import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider2',
        email: 'fernando@google.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]:value
        })

    }

    useEffect( () =>{
        console.log('useEffect called');
    },[] );
    
    useEffect ( () =>{
        console.log('form state change');
    }, [formState]);

    useEffect ( () => {
        console.log('email change');
    }, [email]);
    

  return (
    <>
        <h1>formulario simple</h1>

        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username} 
            onChange={ onInputChange }
        />

        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="fernando@google.com"
            name="email"
            value={email}
            onChange={ onInputChange }

        />

        {
            (username === 'strider2') && <Message />
        }


    </>
  )
}

