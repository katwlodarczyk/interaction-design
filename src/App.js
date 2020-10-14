import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Week1 from './components/week1';
import Week2 from './components/week2';
import css from './App.css';

const Home = () => (
  <div>
    <h1>Interaction Design</h1>
    <nav>
      <ul>
        <li>
          <Link to="/week-1">Week 1 Splash Screen</Link>
        </li>
        <li>
          <Link to="/week-2">Week 2 Notification</Link>
        </li>
      </ul>
    </nav>
  </div>
)

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/week-1">
          <Week1 />
        </Route>
        <Route path="/week-2">
          <Week2 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
