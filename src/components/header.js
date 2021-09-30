import React from 'react'
import Navbar from "./nav"

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default function Header() {
  return (
    <div>
      <Router>
        <Navbar />
      </Router>
      
    </div>
  );

};