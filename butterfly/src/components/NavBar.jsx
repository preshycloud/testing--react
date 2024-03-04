
import '../styles/navbar.css'
import React from 'react'

const NavBar = () => {
  return (
    <nav >
        <div className="navFirst">
            <img className="logo" src="./assets/logo.png" alt="" />
        </div>
        <div className="navSecond">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Project</a>
            <a href="#">Contact</a>
        </div>
        <div className="navThird">
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-solid fa-phone"></i>

        </div>
    </nav>
 
    
  )
}

export default NavBar