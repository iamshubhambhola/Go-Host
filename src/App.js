import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/home";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch> 
          <Route path="/" component={Home}></Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
