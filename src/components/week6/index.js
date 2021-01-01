import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import goback from './../../assets/back-icon.svg';
import iphone from './../../assets/iphone-x.png';
import hamburgerMenu from './../../assets/hamburger-menu.svg';
import closeIcon from './../../assets/close-icon.svg';
import statusBar from './../../assets/status-bar.svg';
import arrow from './../../assets/chevron-down.svg';
import traveling from './../../assets/traveling.png';
import spinner from './../../assets/spinner.svg';
import { Swipeable } from 'react-swipeable';


const StyledNavWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const StyledSideNav = styled.div`
    position: absolute;
    width: ${(props) => props.open ? '136px' : '0px'};
    height: 553px;
    top: -6px;
    right: -11px;
    background: white;
    box-shadow: 2px 4px 4px rgba(0,0,0,0.25);
    z-index: 1;
    border-bottom-right-radius: 23px;
`;

const StyledCloseIcon = styled.img`
    float: right;
    width: 25px;
    height: 25px;
    margin: 0 1rem 3rem 1rem;
    cursor: pointer;
    display: flex;
    position: absolute;
    top: 12px;
    right: -3px;
`;

const StyledNav = styled.ul`
    display: flex;
    color: #333333;
    flex-direction: column;
    padding-left: 0;
    & li {
        text-align: right;
        list-style: none;
        padding-right: 16px;
        cursor: pointer;
        &:nth-child(-n+2) {
            margin-top: 4rem;
        }
        &:nth-child(n+3) {
            margin-top: 1rem;
        }
        &:hover {
            color: grey;
        }
    }`;

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
    margin:0 auto;
    z-index: 10000;
`;

const StyledDiv = styled.div`
   position: relative;
   min-width: 308px;
   min-height: 615px;
`;

const Background = styled.div`
    background-color:white;
    border-radius: 50px;
    object-fit: cover;
    z-index: -10;
    position: absolute;
    width:300px;
    height:615px;
    left:5px;
`;

const Intersection = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   width: 99%;
   height: 100%;
   z-index: 5;
   &:after{
    content: "";
    width: 100px;
    height: 4px;
    background-color: black;
    border-radius: 12px;
    bottom: 5%;
    left: calc(50% - 50px);
   
   }
`;

const StyledIphone = styled.img`
    filter: drop-shadow(10px 7px 3px rgba(0, 0, 0, 0.01));
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
`;

const StatusBar = styled.img`
   width: 80%;
   padding-top: 23px;
`;
 
const StyledHeader = styled.h1`
  color: #333333;
  position: relative;
  font-size: 28px;
  width: 80%;
  display: flex;
  align-self: start;
  justify-content: start;
  margin-bottom:0;
`;

const StyledImage = styled.img`
    width: 65%;
    display: flex;
    justify-content: center;
    align-self: center;
    position: absolute;
    top: 120px;
  `;


const StyledHeaderSection = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   padding: 50px 30px 0 30px;  
`;

const StyledHamburger = styled.a`
   justify-content: center;
   align-content: center;
   cursor: pointer;
   
`;

const StyledDropdown = styled.ul`
    animation: 0.5s ${keyframes({from: {opacity: 0}, to: {opacity: 1}})} linear;
    padding: 0;
    margin-left: 28px;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-content: center;
    width: 248.91px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15), 0 10px 18px rgba(0,0,0,0.22);
    & li{
        &:hover{
            background: #80bfda;
            color: white;
        }
        text-align: left;
        height: 10px;
        padding: 20px;
        cursor: pointer;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        aling-content: center;
        align-items: center;
        fill: currentColor;
        & p {
            margin-top: 14px;
        }
    }
`;

const StyledButton = styled.button`
    color: #fff;
    background-color: #1280ee;
    padding: 12px 16px;
    font-size: 13px;
    border: 0;
    border-radius: 8px;
    box-shadow: 0 0 0.5rem rgba(0,0,0,0.6);
    margin: 200px 28px 0 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    outline: none;
    &:hover{
        background: #80bfda;
        color: white;
    }
    & p {
        margin: 0;
    }
`;

const StyledSubmit = styled.button`
    color: #fff;
    background-color: #6200ee;
    padding: 16px 16px;
    font-size: 16px;
    border: 0;
    border-radius: 8px;
    box-shadow: 0 0 0.5rem rgba(0,0,0,0.6);
    margin: 28px 28px 0 28px;
    position: absolute;
    bottom: 55px;
    left: 0;
    height: 56px;
    width: 249px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    justify-content: center;
    align-items: center;    
    outline: none;
    &:hover{
        background: #80bfda;
        color: white;
    }
    & p {
        padding-right: 8px;
        padding-top: 4px;
        margin: 0;
    }
`;

const StyledSpinner = styled.img`

`;

const Submitted = styled.div`
    display: flex;
`;


export const Dropdown = (props) => {

    const {open, onClick} = props;

    return (
    <>
        {
            open && (<StyledDropdown>
                <li onClick={() => onClick("Car")}>
                    <p>Car</p>
                    <svg class="week6svg" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.6756 11.7536L7.1756 7.25356H18.1756L19.6756 11.7536H5.6756ZM18.1756 16.7536C17.7778 16.7536 17.3962 16.5955 17.1149 16.3142C16.8336 16.0329 16.6756 15.6514 16.6756 15.2536C16.6756 14.8557 16.8336 14.4742 17.1149 14.1929C17.3962 13.9116 17.7778 13.7536 18.1756 13.7536C18.5734 13.7536 18.955 13.9116 19.2363 14.1929C19.5176 14.4742 19.6756 14.8557 19.6756 15.2536C19.6756 15.6514 19.5176 16.0329 19.2363 16.3142C18.955 16.5955 18.5734 16.7536 18.1756 16.7536ZM7.1756 16.7536C6.77777 16.7536 6.39624 16.5955 6.11494 16.3142C5.83363 16.0329 5.6756 15.6514 5.6756 15.2536C5.6756 14.8557 5.83363 14.4742 6.11494 14.1929C6.39624 13.9116 6.77777 13.7536 7.1756 13.7536C7.57342 13.7536 7.95495 13.9116 8.23626 14.1929C8.51756 14.4742 8.6756 14.8557 8.6756 15.2536C8.6756 15.6514 8.51756 16.0329 8.23626 16.3142C7.95495 16.5955 7.57342 16.7536 7.1756 16.7536ZM19.5956 6.75356C19.3956 6.17356 18.8356 5.75356 18.1756 5.75356H7.1756C6.5156 5.75356 5.9556 6.17356 5.7556 6.75356L3.6756 12.7536V20.7536C3.6756 21.0188 3.78095 21.2731 3.96849 21.4607C4.15603 21.6482 4.41038 21.7536 4.6756 21.7536H5.6756C5.94081 21.7536 6.19517 21.6482 6.3827 21.4607C6.57024 21.2731 6.6756 21.0188 6.6756 20.7536V19.7536H18.6756V20.7536C18.6756 21.0188 18.781 21.2731 18.9685 21.4607C19.156 21.6482 19.4104 21.7536 19.6756 21.7536H20.6756C20.9408 21.7536 21.1952 21.6482 21.3827 21.4607C21.5702 21.2731 21.6756 21.0188 21.6756 20.7536V12.7536L19.5956 6.75356Z" fill="currentColor"/>
                    </svg>

                </li>
                <li onClick={() => onClick("Bus")}>
                    <p>Bus</p>
                    <svg class="week6svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6C1.89 6 1 6.89 1 8V15H3C3 15.7956 3.31607 16.5587 3.87868 17.1213C4.44129 17.6839 5.20435 18 6 18C6.79565 18 7.55871 17.6839 8.12132 17.1213C8.68393 16.5587 9 15.7956 9 15H15C15 15.7956 15.3161 16.5587 15.8787 17.1213C16.4413 17.6839 17.2044 18 18 18C18.7956 18 19.5587 17.6839 20.1213 17.1213C20.6839 16.5587 21 15.7956 21 15H23V8C23 6.89 22.11 6 21 6H3ZM2.5 7.5H6.5V10H2.5V7.5ZM8 7.5H12V10H8V7.5ZM13.5 7.5H17.5V10H13.5V7.5ZM19 7.5H21.5V13L19 11V7.5ZM6 13.5C6.39782 13.5 6.77936 13.658 7.06066 13.9393C7.34196 14.2206 7.5 14.6022 7.5 15C7.5 15.3978 7.34196 15.7794 7.06066 16.0607C6.77936 16.342 6.39782 16.5 6 16.5C5.60218 16.5 5.22064 16.342 4.93934 16.0607C4.65804 15.7794 4.5 15.3978 4.5 15C4.5 14.6022 4.65804 14.2206 4.93934 13.9393C5.22064 13.658 5.60218 13.5 6 13.5V13.5ZM18 13.5C18.3978 13.5 18.7794 13.658 19.0607 13.9393C19.342 14.2206 19.5 14.6022 19.5 15C19.5 15.3978 19.342 15.7794 19.0607 16.0607C18.7794 16.342 18.3978 16.5 18 16.5C17.6022 16.5 17.2206 16.342 16.9393 16.0607C16.658 15.7794 16.5 15.3978 16.5 15C16.5 14.6022 16.658 14.2206 16.9393 13.9393C17.2206 13.658 17.6022 13.5 18 13.5Z" fill="currentColor"/>
                    </svg>

                </li>
                <li onClick={() => onClick("Bike")}>
                    <p>Bike</p>
                    <svg class="week6svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 19.3C4.07174 19.3 3.1815 18.9313 2.52513 18.2749C1.86875 17.6185 1.5 16.7283 1.5 15.8C1.5 14.8717 1.86875 13.9815 2.52513 13.3251C3.1815 12.6687 4.07174 12.3 5 12.3C5.92826 12.3 6.8185 12.6687 7.47487 13.3251C8.13125 13.9815 8.5 14.8717 8.5 15.8C8.5 16.7283 8.13125 17.6185 7.47487 18.2749C6.8185 18.9313 5.92826 19.3 5 19.3ZM5 10.8C3.67392 10.8 2.40215 11.3268 1.46447 12.2645C0.526784 13.2021 0 14.4739 0 15.8C0 17.1261 0.526784 18.3979 1.46447 19.3355C2.40215 20.2732 3.67392 20.8 5 20.8C6.32608 20.8 7.59785 20.2732 8.53553 19.3355C9.47322 18.3979 10 17.1261 10 15.8C10 14.4739 9.47322 13.2021 8.53553 12.2645C7.59785 11.3268 6.32608 10.8 5 10.8ZM14.8 8.8H19V7H15.8L13.86 3.73C13.57 3.23 13 2.9 12.4 2.9C11.93 2.9 11.5 3.09 11.2 3.4L7.5 7.09C7.19 7.4 7 7.8 7 8.3C7 8.93 7.33 9.46 7.85 9.77L11.2 11.8V16.8H13V10.3L10.75 8.65L13.07 6.3L14.8 8.8ZM19 19.3C18.0717 19.3 17.1815 18.9313 16.5251 18.2749C15.8687 17.6185 15.5 16.7283 15.5 15.8C15.5 14.8717 15.8687 13.9815 16.5251 13.3251C17.1815 12.6687 18.0717 12.3 19 12.3C19.9283 12.3 20.8185 12.6687 21.4749 13.3251C22.1313 13.9815 22.5 14.8717 22.5 15.8C22.5 16.7283 22.1313 17.6185 21.4749 18.2749C20.8185 18.9313 19.9283 19.3 19 19.3ZM19 10.8C17.6739 10.8 16.4021 11.3268 15.4645 12.2645C14.5268 13.2021 14 14.4739 14 15.8C14 17.1261 14.5268 18.3979 15.4645 19.3355C16.4021 20.2732 17.6739 20.8 19 20.8C19.6566 20.8 20.3068 20.6707 20.9134 20.4194C21.52 20.1681 22.0712 19.7998 22.5355 19.3355C22.9998 18.8712 23.3681 18.32 23.6194 17.7134C23.8707 17.1068 24 16.4566 24 15.8C24 15.1434 23.8707 14.4932 23.6194 13.8866C23.3681 13.28 22.9998 12.7288 22.5355 12.2645C22.0712 11.8002 21.52 11.4319 20.9134 11.1806C20.3068 10.9293 19.6566 10.8 19 10.8V10.8ZM16 3.6C17 3.6 17.8 2.8 17.8 1.8C17.8 0.8 17 0 16 0C15 0 14.2 0.8 14.2 1.8C14.2 2.8 15 3.6 16 3.6Z" fill="currentColor"/>
                    </svg>

                </li>
            </StyledDropdown>)
        }
    </>)
}

function Week6() {
    const [navOpen, setNavOpen] = useState(false);
    const [ open, setOpen ] = useState(false);
    const [click, setClick] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Preferred method of transport");

    const handleClose = () => {

        setNavOpen(false);
    }
    const handleOpen = () => {
        setNavOpen(true);
    }

    const handleSwipe = (event) => {


        if (event.dir === "Left") {
            setNavOpen(true);
        }

        if (event.dir === "Right") {
            setNavOpen(false);
        }
    }

    const handleClick = () => {
        setOpen(!open);
    }

    const handleMenuClick = (item) => {
        setSelectedItem(item);
        setOpen(!open);
    }

    const handleSubmit = () =>{
    
        setClick(!click)
    }

    ;
    

    return (
        <OuterWrapper>
            <a href="/interaction-design/">
                <img src={goback} className="go-back" alt="go back"></img>
            </a>
            <StyledWrapper>
                <StyledDiv>  
                    <StyledIphone src={iphone} className="iphone"></StyledIphone>
                    <Background>
                        <StatusBar src={statusBar} alt="status-bar"></StatusBar>
                    </Background>
                    <Intersection className="intersection">
                        <StyledHeaderSection>
                            <StyledHeader>Transport</StyledHeader>
                            <Swipeable onSwiped={handleSwipe}>
                                <StyledNavWrapper>
                                    <StyledSideNav open={navOpen}>
                                    
                                        {
                                            navOpen &&
                                            (<StyledNav>
                                                <StyledCloseIcon onClick={handleClose} src={closeIcon} />
                                                <li>Settings</li>
                                                <li>About App</li>
                                                <li>Privacy Policy</li>
                                            </StyledNav>)
                                        }
                                    </StyledSideNav>

                                    <StyledHamburger onClick={handleOpen}>
                                        <img src={hamburgerMenu} alt="hamburgermenu"></img>
                                    </StyledHamburger>
                                </StyledNavWrapper>
                            </Swipeable>
                        </StyledHeaderSection>
                        <StyledImage src={traveling}></StyledImage>
                        <StyledButton onClick={handleClick}>
                            <p>{selectedItem}</p>
                            <img src={arrow} alt="arrow"></img>
                        </StyledButton>
                        <Dropdown open={open} onClick={handleMenuClick}/>
                        <StyledSubmit onClick={handleSubmit}>
                            { !click && 
                                (<p>SUBMIT</p>)
                            }
                            {
                                click &&
                                (<Submitted>
                                    <p>SUBMITTED</p>
                                    <StyledSpinner src={spinner}></StyledSpinner>
                                </Submitted>)
                            }
                            
                        </StyledSubmit>
                       
                    </Intersection>
                </StyledDiv>
            </StyledWrapper>
        </OuterWrapper>
);
}

export default Week6;