import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Week1 from './components/week1';
import Week2 from './components/week2';
import Week3 from './components/week3';
import Week4 from './components/week4';
import Week5 from './components/week5';
import Week6 from './components/week6';
import Week7 from './components/week7';
import Week8 from './components/week8';
import Week9 from './components/week9';
import styled from 'styled-components';
import css from './App.css';

const OuterWrapper = styled.div`
  margin: 0 auto;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e4ecf8;
  text-align: center;
`;

const Heading = styled.h1`
 
`;

const SubHeading =styled.p`
  padding-bottom:20px;
  font-size: 18px; 
`;

const Sublink = styled.a`
  color: #3f3d56;
  padding-left: 2px;
  &:hover{
    text-decoration: underline;

  }
`;

const li = styled.li`
  color: #000;
`;

const Home = () => (
  <OuterWrapper>
    <div>
      <Heading>Interaction Design</Heading>
      <SubHeading>React components by  
        <Sublink href="https://github.com/katwlodarczyk">Kat Wlodarczyk</Sublink>
      </SubHeading>
      <nav>
        <ul className="flex-container">
          <li className="flex-item">
            <Link to="/interaction-design/week-1">
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front">
                <h2>Week 1:</h2>
                  <p>Splash Screen</p>
                </div>
                <div className="back">
                  <img src="./assets/week1-display.jpg" className="week-display" alt="week1"/>
                </div>
              </div>
            </div>
            </Link>
          </li>
          <li className="flex-item">
            <Link to="/interaction-design/week-2">
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front">
                <h2> Week 2:</h2>
                  <p>Notification</p>
                </div>
                <div className="back">
                  <img src="./assets/week2-display.jpg" className="week-display" alt="week2"/>
                </div>
              </div>
            </div>
            </Link>
          </li>
          <li className="flex-item">
            <Link to="/interaction-design/week-3">
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front">
                <h2> Week 3:</h2>
                  <p>Button</p>
                </div>
                <div className="back">
                  <img src="./assets/week3-display.jpg" className="week-display" alt="week3"/>
                </div>
              </div>
            </div>
            </Link>
          </li>
          <li className="flex-item">
            <Link to="/interaction-design/week-4">
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front">
                <h2> Week 4:</h2>
                  <p>Login screen</p>
                </div>
                <div className="back">
                  <img src="./assets/week4-display.jpg" className="week-display" alt="week4"/>
                </div>
              </div>
            </div>
            </Link>
          </li>
          <li className="flex-item">
            <Link to="/interaction-design/week-5">
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front">
                <h2> Week 5:</h2>
                  <p>Mobile Navigation</p>
                </div>
                <div className="back">
                  <img src="./assets/week5-display.jpg" className="week-display" alt="week5"/>
                </div>
              </div>
            </div>
            </Link>
          </li>
          <li className="flex-item">
            <Link to="/interaction-design/week-6">
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front">
                <h2> Week 6:</h2>
                  <p>Dropdown menu</p>
                </div>
                <div className="back">
                  <img src="./assets/week6-display.jpg" className="week-display" alt="week6"/>
                </div>
              </div>
            </div>
            </Link>
          </li>
          <li className="flex-item">
            <Link to="/interaction-design/week-7">
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front">
                <h2> Week 7:</h2>
                  <p>Forms & user feedback</p>
                </div>
                <div className="back">
                  <img src="./assets/week7-display.jpg" className="week-display" alt="week7"/>
                </div>
              </div>
            </div>
            </Link>
          </li>
          <li className="flex-item">
            <Link to="/interaction-design/week-8">
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front">
                <h2> Week 8:</h2>
                  <p>Modal</p>
                </div>
                <div className="back">
                  <img src="./assets/week8-display.jpg" className="week-display" alt="week8"/>
                </div>
              </div>
            </div>
            </Link>
          </li>
          <li className="flex-item">
            <Link to="/interaction-design/week-9">
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front">
                <h2> Week 9:</h2>
                  <p>Toggle Switch</p>
                </div>
                <div className="back">
                  <img src="./assets/week9-display.jpg" className="week-display" alt="week9"/>
                </div>
              </div>
            </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </OuterWrapper>
)

function App() {
  return (
    <OuterWrapper>
      <Router>
        <Switch>
          <Route path="/interaction-design/week-1">
            <Week1 />
          </Route>
          <Route path="/interaction-design/week-2">
            <Week2 />
          </Route>
          <Route path="/interaction-design/week-3">
            <Week3 />
          </Route>
          <Route path="/interaction-design/week-4">
            <Week4 />
          </Route>
          <Route path="/interaction-design/week-5">
            <Week5 />
          </Route>
          <Route path="/interaction-design/week-6">
            <Week6 />
          </Route>
          <Route path="/interaction-design/week-7">
            <Week7 />
          </Route>
          <Route path="/interaction-design/week-8">
            <Week8 />
          </Route>
          <Route path="/interaction-design/week-9">
            <Week9 />
          </Route>
          <Route path="/interaction-design/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </OuterWrapper>
  );
}


export default App;
