import { useState, useMemo } from "react";
import useCounter from "../hooks/useCounter";

// Función costosa simulada
const slowFunction = (num) => {
  for (let i = 0; i < 100000000; i++) {
    // Simula un cálculo pesado
  }
  return num * 2;
};

const MemoHook = () => {
  const { counter, increment } = useCounter(5);
  const [show, setShow] = useState(true);

  // Memoiza el resultado de slowFunction solo cuando cambia counter
  const memoValue = useMemo(() => slowFunction(counter), [counter]);

  return (
    <div>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <h4>Valor memoizado: {memoValue}</h4>
      <button onClick={increment} 
      className="btn btn-primary">
        +1
      </button>

      <button 
      className="btn btn-primary"
      onClick={ () => setShow(!show)} >
        Show/Hide {JSON.stringify(show)}    
      </button>
    </div>
  );
};

export default MemoHook;
