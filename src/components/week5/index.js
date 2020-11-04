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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().required("Email is required").email("Not a valid email"),
    password: yup.string().required("Password is required"),
  });

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
    position: absolute;
   }
`;

const StyledIphone = styled.img`
    filter: drop-shadow(20px 24px 32px rgba(0, 0, 0, 0.251783));
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
   & p{
        margin-top: 0;
        margin-bottom: 5px;
   }
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
                            <StyledHeader>Header</StyledHeader>
                            <StyledHamburger href="#">
                                <img src={hamburgerMenu}></img>
                            </StyledHamburger>
                        </StyledHeaderSection>
                        <StyledTopSection>
                            <StyledAvatar src={userAvatar} alt="user-avatar"></StyledAvatar>
                            <StyledInfo>
                                <p>userName</p>
                                <p>bio</p>
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