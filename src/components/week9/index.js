import React, { useState , useEffect} from "react";
import styled, { keyframes } from 'styled-components';
import goback from './../../assets/back-icon.svg';
import iphone from './../../assets/iphone-x.png';
import statusBar from './../../assets/status-bar.svg';

const time = '0.1s';
const lightBackground = 'linear-gradient(90deg, #EAC29C 0%, #EDE8CF 100%)';
const darkBackground = 'linear-gradient(90deg, #46517F 0%, #8DA5B4 100%)';
const setAnimation = (from, to) => keyframes({from: from, to: to});

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
    background: ${lightBackground};
    border-radius: 50px;
    object-fit: cover;
    z-index: -10;
    position: absolute;
    width:300px;
    height:615px;
    left:5px;
    animation: ${time} ${({ showBackground }) => showBackground && setAnimation({ background: lightBackground }, { background: darkBackground })} linear;
   animation-fill-mode: forwards;
`;

const Intersection = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   width: 80%;
   height: 100%;
   z-index: 5;
   padding-top: 50px;
   padding-left: 30px;
   padding-right: 30px;
   &:after{
    content: "";
    width: 100px;
    height: 4px;
    background-color: black;
    animation: ${time} ${({ showLightfont }) => showLightfont && setAnimation({ backgroundColor: 'black' }, { backgroundColor: '#ffffff' })} linear;
    animation-fill-mode: forwards;
    border-radius: 12px;
    bottom: 12%;
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
  animation: ${time} ${({ showLightfont }) => showLightfont && setAnimation({ color: '#333333' }, { color: '#ffffff' })} linear;
  animation-fill-mode: forwards;
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

`;

const StyledDummyDiv = styled.div`
   display:flex;
   position: relative;
   width: 100%;
   height: 80%;
   padding-top: 20px;
   flex-direction: column;
   flex-wrap: wrap;
   justify-content: flex-start;
   align-content: flex-start;
   align-items: flex-start;
`;

const StyledDummy1 = styled.div`
    background: #f2f2f2;
    position: relative;
    width: 120px;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    order: 0;
    flex: 0 1 50%;
    align-self: auto;
`;
const StyledDummy2 = styled.div`
    position: relative;
    width: 120px;
    background: #F2F2F2;
    order: 0;
    flex: 0 1 30%;
    align-self: auto;
    border-radius: 10px;
`;
const StyledDummy3 = styled.div`
    position: relative;
    width: 112px;
    background: #F2F2F2;
    border-radius: 10px;
    margin-bottom: 10px;
    order: 1;
    flex: 0 1 30%;
    align-self: auto;
`;
const StyledDummy4 = styled.div`
    position: relative;
    width: 112px;
    background: #F2F2F2;
    border-radius: 10px;
    order: 1;
    flex: 0 1 50%;
    align-self: auto;
`;

const StyledToggle = styled.div`
   border-radius: 50px;
   background:  linear-gradient(90deg, #FFA751 0%, #FFE259 100%);
   animation: ${time}  ${({dark}) => dark && setAnimation({background: lightBackground}, {background: darkBackground})} linear;
   animation-fill-mode: forwards;
   height: 32px;
   width: 58px;
   display:flex;
   position: relative;
   align-self: flex-end;
   z-index:100;
   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);
`;

const StyledSwitch = styled.span`
   background: #ffffff url('./assets/smiley-sun.svg') no-repeat center;
   z-index: 101;
   width:28px;
   height: 26px;
   border-radius: 50px;
   display:flex;
   justify-content:center;
   align-self: center;
   margin-left: 3px;
   margin-top:0.5px;
   animation: ${time}  ${({dark}) => dark && setAnimation({marginLeft: '3px', background: '#ffffff url(\'./assets/smiley-sun.svg\') no-repeat center'}, {marginLeft: '26px', background: '#ffffff url(\'./assets/smiley-moon.svg\') no-repeat center'})} linear;
   cursor: pointer;
   animation-fill-mode: forwards;
`;

const Toggle = (props) => {
    const [dark, setDark] = useState(false);
    const {onDark, onNotDark} = props;
    useEffect(() => {
        if (!dark) {
            onNotDark();
            return;
        }
        onDark();
    }, [dark])

    const handleClick = () => {
        setDark(!dark)
    }; 

    return (<StyledToggle dark={dark}>
        <StyledSwitch dark={dark} onClick={handleClick}></StyledSwitch>
    </StyledToggle>
    )};

function Week9() {
    const [navOpen, setNavOpen] = useState(false);
    const [ open, setOpen ] = useState(false);
    const [click, setClick] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const [showLightfont, setShowLightfont] = useState(false);


    const handleNotDark = () => setShowBackground(false) & setShowLightfont(false);
    const handleDark = () => setShowBackground(true) & setShowLightfont(true);

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
    
    

    return (
        <OuterWrapper>
            <a href="/interaction-design/">
                <img src={goback} className="go-back" alt="go back"></img>
            </a>
            <StyledWrapper>
                <StyledDiv>  
                    <StyledIphone src={iphone} className="iphone"></StyledIphone>
                    <Background showBackground={showBackground}>
                        <StatusBar src={statusBar} alt="status-bar"></StatusBar>
                    </Background>
                    <Intersection showLightfont= {showLightfont} className="intersection">
                        <Toggle onNotDark= {handleNotDark} onDark= {handleDark} />
                        <StyledHeaderSection>
                            <StyledHeader showLightfont= {showLightfont}>Toggle Switch</StyledHeader>
                        </StyledHeaderSection>
                        <StyledDummyDiv>
                            <StyledDummy1></StyledDummy1>
                            <StyledDummy2></StyledDummy2>
                            <StyledDummy3></StyledDummy3>
                            <StyledDummy4></StyledDummy4>
                        </StyledDummyDiv>
                    </Intersection>
                </StyledDiv>
            </StyledWrapper>
        </OuterWrapper>
);
}

export default Week9;