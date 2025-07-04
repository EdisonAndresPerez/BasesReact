import React from 'react'

export default function Button() {

    function handle() {
        console.log("le diste click")
    }
  return (


    <button onClick={handle}>
        dame click
    </button>
  )
}
