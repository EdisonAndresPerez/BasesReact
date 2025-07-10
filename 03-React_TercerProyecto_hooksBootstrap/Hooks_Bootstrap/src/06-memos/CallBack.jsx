import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

const CallBack = () => {
    const [counter, setCounter] = useState(10);

    // Función memorizada con useCallback
    const incrementFather = useCallback(
        (value) => {
            setCounter((v) => v + value)
        },
        []
    );

    // La prop 'onIncrement' se pasa al componente ShowIncrement
    // Su valor es la función incrementFather definida arriba
    // <ShowIncrement onIncrement={incrementFather} />

    return (
        <>
            <h1>Uso de CallBack Hook: {counter}</h1>
            <hr />
            <ShowIncrement onIncrement={incrementFather} />
        </>
    );
};

export default CallBack;
