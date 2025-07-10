/**
 * Componente para agregar una nueva categoría/personaje a la búsqueda.
 * Permite al usuario escribir el nombre de un personaje y enviarlo al componente padre.
 * @param {function} onNewCategoria - Función que recibe el nuevo personaje a agregar.
 */
import { useState } from 'react'

export default function AddCategory({onNewCategoria}) {
    // Estado local para almacenar el valor del input
    const [inputValue, setInputValue] = useState('')

    /**
     * Maneja el cambio en el input de texto.
     * Actualiza el estado local con el valor actual del input.
     * @param {object} event - Evento de cambio del input
     */
    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    /**
     * Maneja el envío del formulario.
     * Si es válido, limpia el input y llama a la función del padre con el nuevo valor.
     * @param {object} event - Evento de envío del formulario
     */
    const onSubmit = ( event) => {
      // Previene el comportamiento por defecto del formulario (recargar la página)
        event.preventDefault()
      //Si el input tiene menos de 2 caracteres, no hace nada.
        if ( inputValue.trim().length <= 1) return
      // Limpia el input y llama a la función del padre con el valor actual
        setInputValue('') // Limpia el input
        // Llama a la función del padre con el nuevo personaje (ya sin espacios)
        onNewCategoria(inputValue.trim() ) // Llama a la función del padre
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
        type="text"
        placeholder='Buscar Personaje de Dragon Ball'
        value={inputValue}
        onChange={onInputChange}
         />
    </form>
  )
}
