import React from 'react'
import Navbar from "./nav"
import './header.css'

export default function Header() {
  return (
    <header> 
      
        <div>
          {/* logo */}
        </div>
        <div>
          <nav>
            <ul>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Docs</a></li>
                <li><a href='#'>Sign In</a></li>
            </ul>
          </nav>
            
          <a href='#'><button>Sign Up</button></a>
        </div>
        
      
        {/* <Navbar />        */}

    </header>
  );

};