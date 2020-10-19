import React from "react";
import styled from 'styled-components';
import goback from './../../assets/back-icon.svg';
import iphone from './../../assets/iphone-x.png';
import wallpaper from './../../assets/wallpaper.jpg';
import add from './../../assets/add.svg';
import send from './../../assets/send.svg';

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
    margin:0 auto;
    z-index: 10000;
`;

const StyledDiv = styled.div`
   position: relative;
`;


const StyledButton = styled.button`
    color: #fff;
    background-color: ${(props) => props.color};
    padding: 16px 32px;
    font-size: 24px;
    border: 0;
    border-radius: 8px;
    box-shadow: 0 0 0.7rem rgba(0,0,0,0.5);
    margin: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

const Icon = styled.img`
    margin-right: 8px;
`;

const Button = (props) => {

    const {children, color} = props;

    return <StyledButton color={color}> {children} </StyledButton>
};

function Week3() {
    return (
        <OuterWrapper>
            <a href="/">
                <img src={goback} className="go-back" alt="go back"></img>
            </a>
            <StyledWrapper>
                <StyledDiv>  
                        <Button color="#6200ee">PRIMARY</Button>
                        <Button color="#1200ee">SECONDARY</Button>
                        <Button color="#1280ee"><Icon src={send}></Icon><span> WITH ICON</span></Button>
                        <Button color="#1280ee"><img src={add}></img></Button>
                        <Button color="#a3b7ca" className="button-disabled">DISABLED</Button>
                </StyledDiv>
            </StyledWrapper>
        </OuterWrapper>
);
}


export default Week3;