import React from "react";
import styled from 'styled-components';
import goback from './../../assets/back-icon.svg';
import iphone from './../../assets/iphone-x.png';
import flashlight from './../../assets/flashlight-icon.svg';
import camera from './../../assets/camera-icon.svg';
import wallpaper from './../../assets/wallpaper.jpg';
import Notification from './notification';

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

const Intersection = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
`;

const StyledIphone = styled.img`
    filter: drop-shadow(20px 24px 32px rgba(0, 0, 0, 0.251783));
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
`;

const Wallpaper = styled.img`
    position: absolute;
    top: 0;
    right: 7px;
    z-index: -5;
    width: 292px;
    height: 606px;
    border-radius: 60px;
    object-fit: cover;
`; 

const TopSection = styled.div`
    padding-top:100px;
`;

const ClockDiv = styled.div`
    position:relative;
    font-size: 50px;
    display: flex;
    justify-content: center;
    color: white;
`;

const DateDiv = styled.div`
    font-size: 20px;
    display: flex;
    justify-content: center;
    position:relative;
    color: white;
`;

const FunctionButtonsSection = styled.div`
   display: flex;
   align-content: flex-end;
   flex-direction: row;
   justify-content: space-around;
   margin: 0 20px;
`;

const CameraButton = styled.a`
    padding: 10px 10px;
    background-color: #dadada;
    // opacity: 0.6;
    border-radius: 100px;
    line-height: 100%;
    position: absolute;
    bottom: 55px;
    right: 19%;
`;

const FlashlightButton = styled.a`
    padding: 10px 10px;
    background-color: #dadada;
    border-radius: 100px;
    line-height: 100%;
    position: absolute;
    bottom: 58px;
    right: 66%;
`;

const Camera = styled.img`
    width: 24px;
    height: 24px;
    opacity:1;
`;

const Flashlight = styled.img`
    width: 24px;
    height: 24px;
`;

function Week2() {
    return (
        <OuterWrapper>
           <a href="/interaction-design/">
                <img src={goback} className="go-back" alt="go back"></img>
            </a>
            <StyledWrapper>
                <StyledDiv>   
                    <StyledIphone src={iphone} className="iphone"></StyledIphone>
                    <Wallpaper src={wallpaper}></Wallpaper>
                    <Intersection className="intersection">
                        <TopSection>
                            <ClockDiv id="time">12:54</ClockDiv>
                            <DateDiv id="date">Friday 16 October</DateDiv>
                        </TopSection>
                        <Notification />
                       <FunctionButtonsSection>
                            <FlashlightButton href="#" className="flashlight-button">
                                <Flashlight src={flashlight} className="function-icon" alt="flashlight"></Flashlight>
                            </FlashlightButton>
                            <CameraButton href="#" className="camera-button">
                                <Camera src={camera} alt="camera" className="function-icon"></Camera>
                            </CameraButton>
                       </FunctionButtonsSection>
                    </Intersection>
                </StyledDiv>
            </StyledWrapper>
        </OuterWrapper>
);
}


export default Week2;