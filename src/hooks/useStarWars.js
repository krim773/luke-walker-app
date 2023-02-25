import { useState } from "react"


export const useStarWars = (initialValue = 'people') =>{

    const [seleccion, setSeleccion] = useState( initialValue )
    
    const people = () =>{
        setSeleccion ( initialValue );
    }

    const vehicles = () => {
        setSeleccion ( 'vehicles' );
    }

    const species = () => {
        setSeleccion ( 'species' )
    }

    const films = () => {
        setSeleccion ( 'films' );
    }

    const starship = () => {
        setSeleccion ( 'starship' );
    }


    return{
        seleccion,
        people,
        vehicles,
        species,
        films,
        starship,
    }
}