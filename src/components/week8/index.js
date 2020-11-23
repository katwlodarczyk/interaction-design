import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import goback from './../../assets/back-icon.svg';
import loginImage from './../../assets/login-image.png';
import closeIcon from './../../assets/close-icon.svg';

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
    height: 60vh;
    margin:0 auto;
    z-index: 950;
`;

const MainHeader = styled.h1`
    color: #26295c
`;

const StyledGrid = styled.div`
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: space-evenly;
    -webkit-align-content: flex-start;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    padding-left: 0;
`;

const StyledDiv = styled.div`
   position: relative;
   background: #ffffff;
   padding: 32px 38px;
   border-radius: 8px;
   margin: 5px 10px;
   box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); 
`;

const Section = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

 
const StyledHeader = styled.h1`
    color: #26295c;
    position: relative;
    font-size: 28px;
    width: 100%;
    display: flex;
    align-self: center;
    justify-content: center;
    margin-bottom:0;
    @media (max-width:420px) {
        font-size: 20px;
    }  
`;


const StyledImage = styled.img`
    width: 90%;
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
  margin-top: 10px;
  outline-color: #896EFD; 
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    background: #B8A7FE;
    outline: hidden;
  }
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
  height: 80%;
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
    @media (max-width: 660px) {
        flex-direction: column;
    }
`;

const StyledInfo = styled.div`
    width: 50%;
`;

const StyledDetailImage = styled.img`
    width: 30%;
    padding: 24px;
    display: flex;
    justify-content: center;
    align-self: center;
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
                <h1>Item 1</h1>
                <StyledInside>
                    <StyledDetailImage src={loginImage} alt=""></StyledDetailImage>
                    <StyledInfo>
                        <h2>Details:</h2>
                        <p>lorem</p>
                    </StyledInfo>
                </StyledInside>
            </Modal>

            <StyledWrapper>
                <MainHeader>title</MainHeader> 
                <StyledGrid>
                    <StyledDiv>
                        <Section>
                                <StyledHeader>Item 1</StyledHeader>
                                <StyledImage src={loginImage} alt=""></StyledImage>
                                <StyledButton onClick={handleClick}>More details</StyledButton>  
                        </Section>
                    </StyledDiv>
                    <StyledDiv>
                        <Section>
                                <StyledHeader>Item 2</StyledHeader>
                                <StyledImage src={loginImage} alt=""></StyledImage>
                                <StyledButton>More details</StyledButton>
                        </Section>
                    </StyledDiv>
                    <StyledDiv>
                        <Section>
                                <StyledHeader>Item 3</StyledHeader>
                                <StyledImage src={loginImage} alt=""></StyledImage>
                                <StyledButton>More details</StyledButton>
                        </Section>
                    </StyledDiv>
                </StyledGrid>
            </StyledWrapper>
        </OuterWrapper>
);
}

export default Week8;