import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount } from "./store/slices/counter/counterSlice"

function App() {
 
  const {counter} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  
  const handleIncrement = () => {
    dispatch(increment())
  }


  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(2))
  }


  
  return (
    <>
    <h1>holaa</h1>
    <h2>{counter}</h2>
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    <button onClick={handleIncrementByAmount()}>incrementar x2</button>
    </>
  )
}

export default App
