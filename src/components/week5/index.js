import React, { useState } from "react";
import styled from 'styled-components';
import goback from './../../assets/back-icon.svg';
import iphone from './../../assets/iphone-x.png';
import hamburgerMenu from './../../assets/hamburger-menu.svg';
import closeIcon from './../../assets/close-icon.svg';
import statusBar from './../../assets/status-bar.svg';
import loginImage from './../../assets/login-image.png';
import userAvatar from './../../assets/user-avatar.png';
import statsGroup from './../../assets/stats-group.png';
import pictureGroup from './../../assets/picture-group.png';
import appBottomMenu from './../../assets/app-bottom-menu.png';
import { Button } from './../week3';
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
    margin: 0.75rem 1rem 3rem 1rem;
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
        margin-top: 4rem;
        cursor: pointer;
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

const StyledLink = styled.a`
   font-size: 12px;
   align-content: center;
   justify-content: center;
   display:flex;
   color: #8f8f8f;
   &:hover{
       text-decoration: underline;
       color: #896EFD;
   }
`;

const StyledHeaderSection = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   padding: 50px 30px 0 30px;  
`;

const StyledHamburger = styled.a`
   margin-top: 18.760px;
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

const StyledInputGroup = styled.div`
  margin: 5px auto;
`;

const StyledFeed = styled.img`
    position: absolute;
    top: 236px;
    left: 29px;
    width: 82%;
`;

const StyledBottomMenu = styled.img`
    position: absolute;
    bottom: 18px;
    left: 22px;
    width: 87%;
    z-index: 0;
    border-bottom-left-radius: 26px;
    border-bottom-right-radius: 26px;
}
    
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
                                        <img src={hamburgerMenu}></img>
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
                        <StyledBottomMenu src={appBottomMenu}></StyledBottomMenu>
                    </Intersection>
                </StyledDiv>
            </StyledWrapper>
        </OuterWrapper>
);
}

export default Week5;