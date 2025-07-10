import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <nav className='nav'>
        <a href="">home</a>
        <div className='nav_container'>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Noticias</a>
            <a href="">Imagen</a>
        </div>
    </nav>
  )
}
