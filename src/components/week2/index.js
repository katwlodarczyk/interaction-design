import React, {useState} from "react";
import styled from 'styled-components';
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
    width: 30vh;
    margin:0 auto;
    z-index: 10000;
`;

const StyledHeader = styled.h1`
    text-align: center;
    color: #000000;
    font-size: 20px;
    z-index: 10000;
    font-family: 'Montserrat', sans-serif;
    padding-top:100px
`;

const StyledParagraph = styled.p`
    text-align: center;
    color: #000000;
    font-size: 16px;
    margin-top: -10px;
    z-index: 10000;
    font-family: 'Montserrat', sans-serif;
`;

const StyledDiv = styled.div`
border: 1px solid red;
display: flex;
justify-content: space-around;
`;

const Alert = () => {
    const [visible, setVisible] = useState(true);

    const handleClick = (e) => {
        setVisible(false);
    
    }

    return (
        <>
        {
            visible && (
            <StyledDiv>
                <p>hello</p>
                <span onClick={handleClick}>X</span>
            </StyledDiv>
            )
        }
        </>

    );
};

function Week2() {
    return (

        <Alert />
     
    );
}


export default Week2;