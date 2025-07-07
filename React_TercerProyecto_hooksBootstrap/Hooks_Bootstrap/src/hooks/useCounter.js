import { useState } from "react";

const useCounter = (initial = 10) => {
    const [counter, setCounter] = useState(initial);

    const increment = () => setCounter(counter + 1);
    const decrement = () => {
        if (counter <= 0) {
            console.warn("Counter cannot be negative");
            setCounter(0);
        } else {
            setCounter(counter - 1);
        }
    };
    const reset = () => setCounter(initial);

    return {
        counter,
        increment,
        decrement,
        reset,
    };
};

export default useCounter;