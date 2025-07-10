import useCounter from '../hooks/useCounter';

export const CounterWithCustomHooks = () => {
     const { counter, increment, decrement, reset } = useCounter(10);

    

  return (
    <>
      <h1>Contador con hooks react: {counter} </h1>
      <hr/>
      <div>
      <button onClick={increment}  className="btn btn-primary">+</button>
      <button onClick={decrement} className="btn btn-secondary">-</button>
      <button onClick={reset} className="btn btn-alert-warning">Reiniciar</button>
      </div>
    </>
  );
};
