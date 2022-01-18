import React from 'react'
// import Navbar from "./nav"
import './header.css'
import sample from '../images/sample.jpeg'
import logo from '../images/logo.png'
import background from '../images/header_background.png'


export default function Header() {  
  return (

    <div className='header' style={{ backgroundImage: `url(${background})` }}>

      <nav className='navbar'>

        <a className='logo-section' href='#'><h2>G<img src={logo} className='logo'></img>HOST</h2></a>
        <ul className='nav-links'>
          <label for='toggle' className='hamMenu'>&#9776;</label>  
          
            <li><a href='#'>Services</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Docs</a></li>
            <li><a href='#'>Sign In</a></li>
            <li><a href='#'><button>Sign Up</button></a></li>
          
        </ul>
      </nav>


      <div className='header-section'>
        <div className='go-host-info'>
          <h1>Build for safe hosting</h1>
          <p>Go-host makes it easy to build websites and apps on the new open web: permissionless, trustless, censorship resistant, and free of centralized gatekeepers.</p><br></br>
          <button>Get Started For Free</button>
        </div>
        <div className='gif'>
          <img src={sample} className='sample-image' alt='sample'></img>
        </div>
      </div>

    </div>
  );

};