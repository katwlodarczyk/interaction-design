import React from 'react';
import shoppingCart from "./../../assets/shopping-cart.gif";
import blob from './../../assets/blob.png';
import styled from 'styled-components';

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


const SyncBar = (props) => {
   const {completed} = props;
   const containerStyles = {
       height: 20,
       width: '100%',
       backgroundColor: '#a3b7ca',
       borderRadius: 50,
        margin: 'auto',
   }
   const ChildStyles = {
       height: '100%',
       width: `${completed}%`,
       backgroundColor: 'grey',
       borderRadius: 'inherit',
       textAlign: 'right',
       transition: 'width 1s ease-in-out',
   }
   const labelStyles = {
    color: 'white',
    padding: 5,
    fontWeight: 'normal',
    fontSize: '14px',
  }

   return (
       <div style={containerStyles}>
           <div style={ChildStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
           </div>
       </div>
   );
};

const Week1 = () => (
    <OuterWrapper>
        <img class="blob" src={blob} alt="blob"/>
        <StyledWrapper>
                <img class="splash-img" src={shoppingCart} alt="" />
                <StyledHeader>Hang in there!</StyledHeader>
                <StyledParagraph>We are loading the products</StyledParagraph>
                <SyncBar completed={40}></SyncBar>
        </StyledWrapper>
    </OuterWrapper>
);

export default Week1;