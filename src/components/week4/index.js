import React, { useState } from "react";
import styled from 'styled-components';
import goback from './../../assets/back-icon.svg';
import iphone from './../../assets/iphone-x.png';
import showIcon from './../../assets/show-icon.svg';
import hideIcon from './../../assets/hide-icon.svg';
import facebookIcon from './../../assets/facebook-icon.svg';
import googleIcon from './../../assets/google-icon.svg';
import appleIcon from './../../assets/apple-icon.svg';
import loginImage from './../../assets/login-image.png';
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
 
const StyledHeader = styled.h1`
  color: #B8A7FE;
  position: relative;
  font-size: 20px;
  padding-top: 50px;
  width: 80%;
  display: flex;
  align-self: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 80%;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const StyledInputGroup = styled.p`
  margin: 5px auto;
`;

const StyledLabel = styled.p`
  font-size: 14px;
  display: flex;
  align-content: start;
  padding-left: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #c7c7c7;
  height: 36px;
  width: 200px;
  padding-left: 10px;
  font-size: 14px;
  border-radius: 6px;
  display: flex;
  align-content: start;
  margin-left: 40px;
  outline-color: #896EFD; 
`;

const StyledSpan = styled.span`
  display: flex;
  flex-direction: flex-row;
  justify-content: space-between;
  align-content: start;
  width: 80%;
`;

const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
  padding-top: 8px;
  cursor: pointer;
`;

const StyledErrorText = styled.p`
    color: red;
    font-size: 12px;
    display:flex;
    align-content: start;
    margin-left: 40px;
    margin-top: 5px;
    margin-bottom:5px;
    height: 15px;
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
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    background: #B8A7FE;
  }
`;


function Week4() {

    const [showPassword, setShowPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const { register, handleSubmit, watch, errors } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => console.log(data);

    const handleClick = (e) => {
        setShowPassword(!showPassword);
    };

    return (
        <OuterWrapper>
            <a href="/interaction-design/">
                <img src={goback} className="go-back" alt="go back"></img>
            </a>
            <StyledWrapper>
                <StyledDiv>  
                    <StyledIphone src={iphone} className="iphone"></StyledIphone>
                    <Background></Background>
                    <Intersection className="intersection">
                        <StyledHeader>Sign in to your account</StyledHeader>
                        <StyledImage src={loginImage} alt=""></StyledImage>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <StyledInputGroup>
                            <StyledLabel>Email</StyledLabel>
                            <StyledInput
                                type="text"
                                name="email"
                                placeholder="joe@example.com"
                                ref={register()}
                            />
                             <StyledErrorText> {errors.email?.message}</StyledErrorText>
                        </StyledInputGroup>
                       
                        <StyledInputGroup>
                            <StyledSpan>
                                <StyledLabel>Password</StyledLabel>
                                <StyledIcon
                                    src={showPassword ? hideIcon : showIcon}
                                    onClick={handleClick}
                                ></StyledIcon>
                            </StyledSpan>
                            <StyledInput
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="hello_world123"
                                ref={register()}
                            />
                            <StyledErrorText> {errors.password?.message}</StyledErrorText>
                        </StyledInputGroup>
                        <StyledInputGroup>
                            <StyledButton> SIGN IN </StyledButton>
                        </StyledInputGroup>
                    </form>
                        
                    </Intersection>
                </StyledDiv>
            </StyledWrapper>
        </OuterWrapper>
);
}


export default Week4;