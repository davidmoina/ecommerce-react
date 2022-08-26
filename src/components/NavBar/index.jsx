import React from 'react'
import './style.css'

const NavBar = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <h3>Logo</h3>
      </div>
      <nav className='navbarContainer'>
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Productos</a></li>
          <li><a href="/#">Contacto</a></li>
          <li><a href="/#">Faqs</a></li>
        </ul>
      </nav>
      <div className='carritoContainer'>
        <a href=" "><i class="fa-solid fa-cart-shopping"></i></a>
      </div>
    </header>
  )
}

export default NavBar;