import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { useStarWars } from "../hooks/useStarWars";


export const Inicio = () => {

    const {seleccion, people, vehicles, species, films, starship} = useStarWars();

    const {counter, increment} = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://swapi.dev/api/${seleccion}/${ counter }/`);

    console.log({ data });

    const { name, height} = !!data && data;

    console.log( name, height)

    



    return (
        <>
            <h1>StarWars</h1>
            <hr />

            {
                isLoading
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>

                    )
                    : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-1"> {name}</p>
                            <footer className="blockquote-footer">{height} </footer>
                        </blockquote>
                    )
            }

            <label >
                <select>
                    <option value={people}>people</option>
                    <option value={films}>films</option>
                    <option value={starship}>starship</option>
                    <option value={vehicles}>vehicles</option>
                    <option value={species}>species</option>
                </select>
                
                <input type="text" />
                <input type="submit" onClick={ () => value }/>
            </label>

            <button 
            className="btn btn-primary"
            disabled={isLoading}
            onClick={ () => increment() }>
                proximo personaje
            </button>

        </>
    )
}