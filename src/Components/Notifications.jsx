import React, { useState } from 'react';
import { getToken, onMessageListener } from '../firebase';
import Logo from '@/Assets/img/pbh_icon.png';
import { store } from 'react-notifications-component';
import 'animate.css/animate.min.css';

export const Notifications = () => {  
    const [show, setShow] = useState(false);
    const [notification, setNotification] = useState({title: '', body: ''});
    const [isTokenFound, setTokenFound] = useState(false);
    getToken(setTokenFound);
  
    onMessageListener().then(payload => {
      setShow(true);
      setNotification({title: payload.notification.title, body: payload.notification.body});
      notificationHandler();
      console.log(payload);
    }).catch(err => console.log('failed: ', err));

    const notificationHandler = () => {
      store.addNotification({
        title: notification.title,
        message: notification.body,
        type: "info",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    }
    return(
      <>
      </>
    )
}
