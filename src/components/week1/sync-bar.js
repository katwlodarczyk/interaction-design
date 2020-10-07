import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 20vw;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const span = styled.span`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 20px;
    width: 50px;
    color: #a3b7ca;
    border: solid 1px black;
    margin:0 auto;
    z-index: 10000;
`;

const p = styled.p`
    display: flex;
    justify-content: center;
    margin:0 auto;
    z-index: 10000;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
`;


const SyncBar = () => (
    <Wrapper>
        <span class="progress-bar">
        </span>
        <p class="progress-value"> progress </p>
    </Wrapper>
);

export default SyncBar;