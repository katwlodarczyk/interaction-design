import React, { useState } from "react";
import shoppingCart from "./../../assets/shopping-cart-gif.gif";
import blob from './../../assets/blob.png';
import goback from './../../assets/back-icon.svg';
import styled from 'styled-components';
import ProgressBar from './sync-bar';
import iphone from './../../assets/iphone-x.png';

const OuterWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e4ecf8;
    position: relative;
`;
const Container = styled.div`
    position: relative;
    width:308px;
    height: 615px;
`

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 66%;
    margin:0 auto;
    z-index: 1000000000000;
    background: #e4ecf8;
`;

const StyledHeader = styled.h1`
    text-align: center;
    color: #000000;
    font-size: 20px;
    z-index: 10000;
    font-family: 'Montserrat', sans-serif;
    padding-top:100px
`;

const StyledIphone = styled.img`
    filter: drop-shadow(20px 24px 32px rgba(0, 0, 0, 0.251783));
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
`;


const Intersection = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   padding-top: 100px;
   width: 94%;
   height: 100%;
   z-index: 100000;
`;


const StyledParagraph = styled.p`
    text-align: center;
    color: #000000;
    font-size: 16px;
    margin-top: -10px;
    z-index: 10000;
    font-family: 'Montserrat', sans-serif;
`;
  

function Week1() {
    const [progress, setProgress] = useState(0);
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress(oldProgress => {
          if (oldProgress === 100) {
            return 100;
          }
          return Math.min(oldProgress + 5, 100);
        });
      }, 400);
    return () => {
        clearInterval(timer);
      };
    }, []);

return (
    <OuterWrapper>
        <a href="/interaction-design/">
            <img src={goback} className="go-back" alt="go back"></img>
        </a>
        <Container>
            <StyledIphone src={iphone} className="iphone" alt=""></StyledIphone>
            <StyledWrapper>
                <Intersection>
                    <div className="img-wrapper">
                        <img className="blob" src={blob} alt="blob"/>
                        <img className="splash-img" src={shoppingCart} alt="" />
                    </div>
                    <StyledHeader>Hang in there!</StyledHeader>
                    <StyledParagraph>We are loading the products</StyledParagraph>
                    <ProgressBar bgcolor={"#6c63fe"} completed={progress} />
                </Intersection>
            </StyledWrapper>
        </Container>
    </OuterWrapper>
);
}


export default Week1;