import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
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
  padding-top:10px;
`;

const Heading = styled.h1`
 
`;

const SubHeading =styled.p`
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
                <h2>1.</h2>
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
            <Link to="/interaction-design/week-9">
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front">
                <h2>2.</h2>
                  <p>Toggle Switch</p>
                </div>
                <div className="back">
                  <img src="./assets/week9-display.jpg" className="week-display" alt="week9"/>
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
                <h2>3.</h2>
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
            <Link to="/interaction-design/week-7">
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div className="front">
                <h2>4.</h2>
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
                <h2>5.</h2>
                  <p>Modal</p>
                </div>
                <div className="back">
                  <img src="./assets/week8-display.jpg" className="week-display" alt="week8"/>
                </div>
              </div>
            </div>
            </Link>
          </li>
        </ul>
      </nav>

      <Accordion>
        <Card>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
              Click here to see all components
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.28 3.47C11.14 3.33 10.94 3.25 10.75 3.25C10.56 3.25 10.37 3.32 10.22 3.47L6 7.69L1.78 3.47C1.64 3.33 1.44 3.25 1.25 3.25C1.06 3.25 0.86 3.32 0.72 3.47C0.58 3.62 0.5 3.81 0.5 4C0.5 4.19 0.58 4.39 0.72 4.53L5.47 9.28C5.62 9.43 5.81 9.5 6 9.5C6.19 9.5 6.38 9.42 6.53 9.28L6.56 9.25L11.28 4.53C11.43 4.39 11.5 4.19 11.5 4C11.5 3.81 11.43 3.62 11.28 3.47Z" fill="currentColor"/>
              </svg>
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
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

            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>  
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
