import React, { useState } from "react";
import styled from 'styled-components';
import logo from './../../assets/notification-logo.svg';
import close from './../../assets/close-icon.svg';

const NotificationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    z-index: 10000;
    background: #d7dbdd;
    width: 75%;
    margin: 15px auto;
    border-radius: 6px;
    opacity: 0.8;
    padding: 10px;
`;


const NotificationLayout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    z-index: 10000;
    padding-bottom: 10px;
    font-size: 12px;
    color: #3a3a3a;
`;

const AppDetails = styled.div`
    display: flex;
    align-items: center;
`;

const AppName = styled.span`
    padding-left: 5px;
`;


const NotificationBody = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:start;
    flex-direction: column;
    z-index: 10000;
    font-size: 12px;
`;

const Close = styled.a`
    
`;




const Notification = () => {

    const [visible, setVisible] = useState(true);
  
    const handleClick = (e) => {
      setVisible(false);
    };

    return (
        <>
        {visible && (
            <NotificationContainer>
                <NotificationLayout>
                    <AppDetails>
                        <img src={logo} alt="logo"></img> 
                        <AppName>App name</AppName>
                    </AppDetails>
                    <Close onClick={handleClick}> 
                        <img src={close} className="close" alt="close"></img>
                    </Close>
                </NotificationLayout>
                <NotificationBody>
                        This is your daily notification.
                </NotificationBody>
            </NotificationContainer>
       )}
       </>
     );
   };
  
  export default Notification;