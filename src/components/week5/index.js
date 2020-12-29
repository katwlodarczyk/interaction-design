import React, { useState } from "react";
import styled from 'styled-components';
import goback from './../../assets/back-icon.svg';
import iphone from './../../assets/iphone-x.png';
import hamburgerMenu from './../../assets/hamburger-menu.svg';
import closeIcon from './../../assets/close-icon.svg';
import statusBar from './../../assets/status-bar.svg';
import userAvatar from './../../assets/user-avatar.png';
import pictureGroup from './../../assets/picture-group.png';
import appBottomMenu from './../../assets/app-bottom-menu.png';
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
    height: 548px;
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

const StyledHeaderSection = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   padding: 55px 30px 20px 30px;  
`;

const StyledHamburger = styled.a`
   justify-content: center;
   align-content: center;
   cursor: pointer;
   
`;

const StyledTopSection = styled.div`
   display: flex;
   flex-direction: row;
`;

const StyledAvatar = styled.img`
  width: 30%;
  display: flex;
  justify-content: start;
  align-self: start;
  padding-left: 40px;
  padding-top: 20px;
`;

const StyledInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding-left: 20px;
   align-content: start;
   align-items: flex-start;
   & h2{
       font-size: 14px;
       margin: 0;
       padding-top:5px;
   }
   & p{
        margin-top: 5px;
        margin-bottom: 15px;
        font-size: 12px;
   }
`;

const FollowMeButton = styled.button`
   background-color: #32BAF3;
   border: none;
   padding: 5px 25px;
   border-radius: 6px;
   color: #ffffff;
   filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.25));
   cursor: pointer;
`;

const StyledFeed = styled.img`
    position: absolute;
    top: 236px;
    left: 29px;
    width: 82%;
`;

const StyledBottomMenu = styled.div`
    position: absolute;
    bottom: 18px;
    left: 22px;
    width: 87%;
    height: 69px;
    z-index: 0;
    border-bottom-left-radius: 26px;
    border-bottom-right-radius: 26px;
    background-color: white;
    display: flex;
    justify-content: space-evenly;
    padding-top: 10px;
    opacity: 0.95;
`;

const AddButton = styled.div`
   background-color: #32BAF3;
   border-radius: 50px;
    height: 35px;
    width: 35px;
`;

const MenuIcons = styled.a`
    fill: #333333;
    &:hover {
        fill: #32BAF3
    }
    &:active {
        fill: #32BAF3;
    }
    &:visited {
        color: unset;
    } 
`;

const Icon = styled.svg`
    
`;

function Week5() {
    const [navOpen, setNavOpen] = useState(false);

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
                            <StyledHeader>Explore</StyledHeader>
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
                        <StyledTopSection>
                            <StyledAvatar src={userAvatar} alt="user-avatar"></StyledAvatar>
                            <StyledInfo>
                                <h2>daveDavidson</h2>
                                <p>photographer</p>
                                <FollowMeButton>Follow me</FollowMeButton>
                            </StyledInfo>
                        </StyledTopSection>
                        <StyledFeed src={pictureGroup}></StyledFeed>
                        <StyledBottomMenu>
                            <MenuIcons href="#">
                                <Icon width="23" height="19" viewBox="0 0 23 19" fill="" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.3917 18.751V12.251H13.8757V18.751H19.4806V10.085H22.8436L11.6337 0.335022L0.423798 10.085H3.7868V18.751H9.3917Z" fill="fillCurrent"/>
                                </Icon>
                            </MenuIcons>
                            <MenuIcons href="#">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.823 24.001C12.526 24.001 12.241 23.887 12.031 23.684C11.821 23.481 11.703 23.205 11.703 22.918V19.668H7.219C6.624 19.668 6.054 19.44 5.633 19.034C5.213 18.627 4.977 18.076 4.977 17.501V6.66803C4.977 6.09303 5.213 5.54199 5.633 5.13599C6.054 4.72999 6.624 4.50098 7.219 4.50098H22.912C23.507 4.50098 24.077 4.72999 24.498 5.13599C24.918 5.54199 25.154 6.09303 25.154 6.66803V17.501C25.154 18.076 24.918 18.627 24.498 19.034C24.077 19.44 23.507 19.668 22.912 19.668H18.316L14.169 23.687C13.944 23.882 13.675 24.001 13.384 24.001H12.823ZM13.944 17.501V20.838L17.397 17.501H22.912V6.66803H7.219V17.501H13.944ZM2.7346 15.335H0.492599V2.33502C0.492599 1.76002 0.7288 1.20898 1.1493 0.802979C1.5697 0.395979 2.14 0.16803 2.7346 0.16803H20.67V2.33502H2.7346V15.335ZM9.461 8.83502H20.67V11.001H9.461V8.83502ZM9.461 13.168H18.428V15.335H9.461V13.168Z" fill="fillCurrent"/>
                                </svg>
                            </MenuIcons>
                            <MenuIcons href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.666 13.805H13.622V23.633H10.22V13.805H0.175995V10.619H10.22V0.737H13.622V10.619H23.666V13.805Z" fill="fillCurrent"/>
                                </svg>
                            </MenuIcons>
                            <MenuIcons href="#">
                                <svg width="20" height="22" viewBox="0 0 20 22" fill="" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.66 16.501H4.57103V9.46002C4.57103 6.75102 6.81301 4.58502 9.61601 4.58502C12.418 4.58502 14.66 6.75102 14.66 9.46002V16.501ZM16.902 15.418V9.46002C16.902 6.13402 14.503 3.34998 11.297 2.61298V1.87598C11.297 1.44498 11.12 1.03199 10.805 0.72699C10.49 0.42299 10.062 0.250977 9.61601 0.250977C9.17001 0.250977 8.74202 0.42299 8.42702 0.72699C8.11202 1.03199 7.93401 1.44498 7.93401 1.87598V2.61298C4.71701 3.34998 2.33002 6.13402 2.33002 9.46002V15.418L0.0880127 17.585V18.668H19.144V17.585L16.902 15.418ZM9.61601 21.918C10.211 21.918 10.781 21.69 11.201 21.283C11.622 20.877 11.858 20.326 11.858 19.751H7.37401C7.37401 20.326 7.61002 20.877 8.03102 21.283C8.45102 21.69 9.02101 21.918 9.61601 21.918Z" fill="fillCurrent"/>
                                </svg>
                            </MenuIcons>
                            <MenuIcons href="#">
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="#32BAF3" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.47101 2.47601C10.771 2.47601 11.825 3.49498 11.825 4.75098C11.825 6.00798 10.771 7.026 9.47101 7.026C8.17001 7.026 7.117 6.00798 7.117 4.75098C7.117 3.49498 8.17001 2.47601 9.47101 2.47601ZM9.47101 12.226C12.8 12.226 16.309 13.808 16.309 14.501V15.693H2.633V14.501C2.633 13.808 6.14101 12.226 9.47101 12.226ZM9.47101 0.41803C6.99301 0.41803 4.987 2.35698 4.987 4.75098C4.987 7.14598 6.99301 9.08502 9.47101 9.08502C11.948 9.08502 13.955 7.14598 13.955 4.75098C13.955 2.35698 11.948 0.41803 9.47101 0.41803ZM9.47101 10.168C6.47801 10.168 0.502991 11.62 0.502991 14.501V17.751H18.439V14.501C18.439 11.62 12.464 10.168 9.47101 10.168Z" fill="fillCurrent"/>
                                </svg>
                            </MenuIcons>
                        </StyledBottomMenu>
                    </Intersection>
                </StyledDiv>
            </StyledWrapper>
        </OuterWrapper>
);
}

export default Week5;