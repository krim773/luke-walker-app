import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    
    const { counter, increment, decrement, reset } = useCounter();
    
    
    return (
    <>
    
    <h1>counter with hook xxx {counter} </h1>
    <hr />

    <button 
    className="btn btn-primary"
    onClick={ increment }
    >
      +1
    </button>
    
    <button 
    className="btn btn-primary"
    onClick={ reset }
    >
      reset
    </button>
    
    <button 
    className="btn btn-primary"
    onClick={decrement}
    >
      -1
    </button>
    </>
  )
}

