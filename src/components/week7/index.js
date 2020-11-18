import React, { useState } from "react";
import styled from 'styled-components';
import goback from './../../assets/back-icon.svg';
import iphone from './../../assets/iphone-x.png';
import showIcon from './../../assets/show-icon.svg';
import hideIcon from './../../assets/hide-icon.svg';
import facebookIcon from './../../assets/facebook-icon.svg';
import googleIcon from './../../assets/google-icon.svg';
import appleIcon from './../../assets/apple-icon.svg';
import statusBar from './../../assets/status-bar.svg';
import spinner from './../../assets/spinner.svg';
import loginImage from './../../assets/login-image.png';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
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
    height: 60vh;
    margin:0 auto;
    z-index: 10000;
`;

const StyledDiv = styled.div`
   position: relative;
   background: #ffffff;
   padding: 32px 38px;
   border-radius: 8px;
   box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); 
   @media (max-width: 660px) {
       margin-top: 60px;
   }
   @media (max-width:420px) {
        margin: 80px 20px 0 20px; 
        padding-top: 24px;
        padding-bottom: 24px;
    }   
`;

const Section = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
`;

const StyledInside = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    @media (max-width: 660px) {
        flex-direction: column;
    }
`;
 
const StyledHeader = styled.h1`
    color: #B8A7FE;
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

const StyledLink = styled.a`
   font-size: 14px;
   align-content: center;
   justify-content: center;
   display:flex;
   color: #8f8f8f;
   &:hover{
       text-decoration: underline;
       color: #896EFD;
   }
`;

const StyledImage = styled.img`
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: center;
    padding-left: 24px;
    @media (max-width: 660px){
        padding-left: 0;
        padding-bottom: 18px;
    }
  
`;

const StyledInputGroup = styled.div`
  margin: 5px auto;
`;

const StyledLabel = styled.p`
  font-size: 14px;
  display: flex;
  align-content: start;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #333333;
`;

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #c7c7c7;
  height: 36px;
  width: 100%;
  padding-left: 10px;
  font-size: 14px;
  border-radius: 6px;
  display: flex;
  align-content: start;
  outline-color: #896EFD; 
`;

const StyledSpan = styled.span`
  display: flex;
  flex-direction: flex-row;
  justify-content: space-between;
  align-content: start;
  width: 100%;
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
    margin-top: 5px;
    margin-bottom:5px;
    height: 15px;
`;

const StyledForgotLink = styled.button`
    font-size: 10px;
    align-content: start;
    display:flex;
    outline: none;
    appearance: none;
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding-top: 5px;
    position: relative;
    &:hover{
        text-decoration: underline;
        color: #896EFD;
        span {
            opacity: 1;
            transform: translate(-50%, 150%);
        }
    }
`;

const StyledTooltip = styled.span`
    position: absolute;
    left: 46%;
    bottom: 67%;
    z-index: 10;
    opacity: 0;
    cursor: pointer;
    padding: 1em;
    background-color: #e4ecf8;
    font-size: 10px;
    line-height: 1.6;
    text-align: left;
    white-space: nowrap;
    border-radius: 4px;
    transform: translate(-50%, 56%);
    transition: all .15s ease-in-out;
    &::before {
        content: '';
        position: absolute;
        top: -27%;
        left: 1%;
        width: 0;
        height: 0;
        border: .5em solid transparent;
        border-top-color: #e4ecf8;
        transform: translate(-61%,150%);
        transform:rotate(180deg);
    }
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

const StyledSpinner = styled.img`

`;


function Week7() {

    const [showPassword, setShowPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [click, setClick] = useState(false);

    const { register, handleSubmit, watch, errors } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) =>  setClick(!click);

    const handleClick = (e) => {
        setShowPassword(!showPassword);
    };

    // const handleSubmit = () =>{
    //     setClick(!click)
    // }

    return (
        <OuterWrapper>
            <a href="/interaction-design/">
                <img src={goback} className="go-back" alt="go back"></img>
            </a>
            <StyledWrapper>
                <StyledDiv>  
                    <Section>
                            <StyledHeader>Create a new account</StyledHeader>
                            <StyledLink href="#">or sign in</StyledLink>
                            <StyledInside class="styledInside-week7">
                                <StyledImage src={loginImage} alt=""></StyledImage>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <StyledInputGroup>
                                        <StyledLabel>Name</StyledLabel>
                                            <StyledInput
                                                type="text"
                                                name="name"
                                                placeholder="Joe Doe"
                                                ref={register()}
                                            />
                                            <StyledErrorText> {errors.name?.message}</StyledErrorText>
                                    </StyledInputGroup>
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
                                        <StyledForgotLink>
                                            Forgot your password?
                                            <StyledTooltip>
                                                Oh oh...too bad.
                                            </StyledTooltip>
                                        </StyledForgotLink>
                                        <StyledErrorText> {errors.password?.message}</StyledErrorText>
                                    </StyledInputGroup>
                                    <StyledInputGroup>
                                        <StyledButton onClick={handleSubmit}>
                                            { !click && 
                                                (<p>SIGN UP</p>)
                                            }
                                            { click &&
                                            ( <StyledSpinner src={spinner}></StyledSpinner>)
                                            }
                                        </StyledButton>
                                    </StyledInputGroup>
                                </form>
                            </StyledInside>
                    </Section>
                </StyledDiv>
            </StyledWrapper>
        </OuterWrapper>
);
}

export default Week7;