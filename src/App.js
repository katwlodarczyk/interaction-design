import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Week1 from './components/week1';
import Week2 from './components/week2';
import styled from 'styled-components';
import css from './App.css';
import Week1Display from './assets/week1-display.jpg';

const OuterWrapper = styled.div`
  margin: 0 auto;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e4ecf8;
  text-align: center;
`;

const li = styled.li`
  color: #000;
`;

const Home = () => (
  <div>
    <h1>Interaction Design</h1>
    <nav>
      <ul class="flex-container">
        <li class="flex-item">
          <Link to="/week-1">
          <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
	          <div className="flipper">
		          <div className="front">
              <img src="./assets/week1-display.jpg" className="week-display"/>
              </div>
              <div className="back">
                <h1>Week 1:</h1>
                <p>Splash screen</p>
              </div>
            </div>
          </div>
          </Link>
        </li>
        <li class="flex-item">
          <Link to="/week-2">Week 2: Notification</Link>
        </li>
      </ul>
    </nav>
  </div>
)

function App() {
  return (
    <OuterWrapper>
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
    </OuterWrapper>
  );
}


export default App;
