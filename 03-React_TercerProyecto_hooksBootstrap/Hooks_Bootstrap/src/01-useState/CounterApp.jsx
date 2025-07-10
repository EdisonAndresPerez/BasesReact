import { useState } from "react"




export const CounterApp = () => {

const [counter, setCounter] = useState(10)
//tenemos un estado llamado counters que es un objeto que contiene 3 propiedades
const [counters, setCounters] = useState({
    incrementar: 10,
    incrementar2: 20,
    incrementar3: 30
})

    function increment() {
        setCounter(counter + 1)
    }

    //incrementarSoloPrimero es una funcion que incrementa solo la propiedad incrementar del objeto counters
    //usamos el operador spread para copiar el objeto counters y luego solo modificamos la propiedad
    function incrementarSoloPrimero() {
        setCounters({
            ...counters,
            incrementar: counters.incrementar + 1
        })
    }

  return (
    <div>
        <h2>Counter: {counter}</h2>
        <button className="btn" onClick={increment}>+ Counter</button>
        <hr />
        <h2>Incrementar: {counters.incrementar}</h2>
        <h2>Incrementar2: {counters.incrementar2}</h2>
        <h2>Incrementar3: {counters.incrementar3}</h2>
        <button className="btn" onClick={incrementarSoloPrimero}>+ Incrementar</button>
   
    </div>
  )
}
