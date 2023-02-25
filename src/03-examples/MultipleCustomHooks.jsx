import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://swapi.dev/api/people/${ counter }/`);

    console.log({ data });

    const { name, height} = !!data && data;

    console.log( name, height)





    return (
        <>
            <h1>StarWars Quotes</h1>
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

            

            <button 
            className="btn btn-primary"
            disabled={isLoading}
            onClick={ () => increment() }>
                proximo personaje
            </button>

        </>
    )
}