import PropTypes, { func } from 'prop-types'
import { useState } from 'react'

export default function CounterApp({value = 1}) {

  const [numero, setNumero] = useState(0)

  function handle(){
    setNumero(numero + 1)
    console.log(numero)
  }

  function restar(){
    setNumero(numero -1 )
  }

  function reiniciar(){
    setNumero(0)
  }

  return (
    <div className='counter'>
      <button>
      <h3>{numero}</h3>
      </button>
      <button onClick={handle}>
      <h3>+</h3>
      </button>
      <button onClick={restar}>
      <h3>-</h3>
      </button>
      <button onClick={reiniciar}>
        <h3>reset</h3>
      </button>
    </div>
  )

}

CounterApp.Proptypes = {
  value : PropTypes.number
}