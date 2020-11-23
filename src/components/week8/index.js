import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import goback from './../../assets/back-icon.svg';
import loginImage from './../../assets/login-image.png';
import closeIcon from './../../assets/close-icon.svg';
import rocket from './../../assets/rocket.png';

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
    justify-content: start;
    flex-direction: column;
    align-items: center;
    height: 60vh;
    width: 30vw;
    margin:0 auto;
    z-index: 950;
    position: relative;
    background: #ffffff;
    padding: 32px 38px;
    border-radius: 8px;
    margin: 5px 10px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    @media (max-width: 1024px) {
        width: 60vw;
    }
    @media (max-width: 700px) {
        height: 60vh;
        width: 60vw;
        padding: 0 24px;
    }
    @media (max-width: 400px) {
        width: 70vw;
    }
`;

const MainHeader = styled.h1`
    color: #26295c;
    font-size: 36px;
    text-decoration: underline;
    @media (max-width: 700px) {
        font-size: 24px;
    }
`;


const Section = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 80%;
    justify-content: space-around;
    @media (max-width: 1024px){
        height: 100%;
    }
    @media (max-width: 700px) {
        justify-content: space-evenly;
        height: 90%;
    }
    @media (max-width: 400px) {
        height: 80%;
    }
`;


const StyledImage = styled.img`
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: center;
`;


const StyledButton = styled.button`
  height: 46px;
  width: 200px;
  background: #896EFD;
  border-radius: 6px;
  color: #ffff;
  text-align: center;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  outline-color: #896EFD; 
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    background: #B8A7FE;
    outline: hidden;
  }
  @media (max-width: 1024px){
    width: 250px;
    font-size: 22px;
}
  @media (max-width: 600px) {
    width: 150px;
    font-size: 16px;
`;

const ModalWrapper = styled.div`
  animation: 0.2s ${keyframes({from: {opacity:0}, to: {opacity: 1}})} ease-in-out;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 999;
  background: rgb(170,165,189, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModal = styled.div`
  position: fixed;
  z-index: 1000;
  width: 70%;
  background: #fff;
  color: #26295c;
  border-radius: 12px;
  padding: 16px; 16px;
`;

const StyledCloseIcon = styled.img`
    float: right;
    width: 25px;
    height: 25px;
    margin: 0.75rem 1rem 3rem 1rem;
    cursor: pointer;
    display: flex;
    position: absolute;
    top: 12px;
    right: -3px;
`;

const StyledInside = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 80%;
    padding: 0 24px 24px 24px;
    @media (max-width: 660px) {
        flex-direction: column;
    }
`;

const StyledInfo = styled.div`
    width: 50%;
    align-content: center;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 24px;
`;

const StyledDetailImage = styled.img`
    width: 50%;
    padding: 24px;
    display: flex;
    justify-content: center;
    align-self: center;
`;

const StyledLink = styled.a`
   color: #8f8f8f;
   &:hover{
       color: #896EFD;
   }
`;

const Modal = (props) => {
    const {show, onClose, children} = props;
    const blockClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (<> 
    
        {show && (<ModalWrapper onClick={onClose}>
            <StyledModal onClick={blockClick}>
                <StyledCloseIcon onClick={onClose} src={closeIcon} />
                {children}
            </StyledModal>
        </ModalWrapper>)}
    </>)
};

function Week8() {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleClick = () => {
        setShowModal(true);
    }
   

    
    return (
        <OuterWrapper>
            <a href="/interaction-design/">
                <img src={goback} className="go-back" alt="go back"></img>
            </a>

            <Modal show={showModal} onClick={handleClick} onClose={handleCloseModal}>
                <h1>Rocket Launch by 
                    <span>
                        <StyledLink href="https://www.manypixels.co/gallery/?page=1&s=rocket&style=twoColor"> manypixels
                        </StyledLink>
                    </span>
                </h1>
                <StyledInside>
                    <StyledDetailImage src={rocket} alt=""></StyledDetailImage>
                    <StyledInfo>
                        <h2>Details:</h2>
                        <p>Beautiful illustration in two-color style.</p>
                        <p>Royalty-free to download in SVG on PNG format.</p>
                        <StyledButton>Go to manypixels</StyledButton> 
                    </StyledInfo>
                </StyledInside>
            </Modal>

            <StyledWrapper>
                    <MainHeader>Illustration of the month</MainHeader> 
                    <Section>
                            <StyledImage src={rocket} alt=""></StyledImage>
                            <StyledButton onClick={handleClick}>More details</StyledButton>  
                    </Section>
            </StyledWrapper>
        </OuterWrapper>
);
}

export default Week8;