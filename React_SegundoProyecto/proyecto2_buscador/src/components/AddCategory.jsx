import React, { useState } from 'react'

export default function AddCategory({onNewCategoria}) {

    const [inputValue, setInputValue] = useState('Minecraft')


    const onInputChange = ({target}) => {
        console.log(target.value)
        setInputValue(target.value)
    }

    const onSubmit = ( event) => {
        event.preventDefault()
        if ( inputValue.trim().length <= 1) return

        onNewCategoria(inputValue)
        setInputValue('')
        
    }



  return (
    <form onSubmit={onSubmit}>
        <input 
        type="text"
        placeholder='Buscar Gif'
        value={inputValue}
        onChange={onInputChange}
         />
    </form>
  )
}
