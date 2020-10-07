import React, { useState, useEffect } from "react";
import shoppingCart from "./../../assets/shopping-cart.gif";
import blob from './../../assets/blob.png';
import styled from 'styled-components';
import ProgressBar from './sync-bar'

const OuterWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e4ecf8;
`;

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 50vh;
    width: 30vh;
    margin:0 auto;
    z-index: 10000;
`;

const StyledHeader = styled.h1`
    text-align: center;
    color: #000000;
    font-size: 20px;
    z-index: 10000;
    font-family: 'Montserrat', sans-serif;
    padding-top:100px
`;

const StyledParagraph = styled.p`
    text-align: center;
    color: #000000;
    font-size: 16px;
    margin-top: -10px;
    z-index: 10000;
    font-family: 'Montserrat', sans-serif;
`;


const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },
  ];

  


function Week1() {
const [completed, setCompleted] = useState(0);

useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
}, []);

return (
    <OuterWrapper>
        <img className="blob" src={blob} alt="blob"/>
        <StyledWrapper>
                <img className="splash-img" src={shoppingCart} alt="" />
                <StyledHeader>Hang in there!</StyledHeader>
                <StyledParagraph>We are loading the products</StyledParagraph>
                <ProgressBar bgcolor={"#a3b7ca"} completed={completed} />
        </StyledWrapper>
    </OuterWrapper>
);
}


export default Week1;