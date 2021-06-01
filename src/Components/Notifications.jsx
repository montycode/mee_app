import React, { useState } from 'react';
import { getToken, onMessageListener } from '../firebase';
import Logo from '@/Assets/img/pbh_icon.png'

export const Notifications = () => {  
    const [show, setShow] = useState(false);
    const [notification, setNotification] = useState({title: '', body: ''});
    const [isTokenFound, setTokenFound] = useState(false);
    getToken(setTokenFound);
  
    onMessageListener().then(payload => {
      setShow(true);
      setNotification({title: payload.notification.title, body: payload.notification.body})
      console.log(payload);
    }).catch(err => console.log('failed: ', err));
    
    return (
        <>
            <div class={'flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden z-100' + (show ? ' ' : ' hidden' )}>
                <div class="w-2 bg-gray-800"></div>
                <div class="flex items-center px-2 py-3">
                    <img class="w-4 h-4 object-cover rounded-full" src={Logo} />
                    <div class="mx-3">
                    <h2 class="text-xl font-semibold text-gray-800">{notification.title}</h2>
                    <p class="text-gray-600">{notification.body} <button className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline" onClick={() => setShow(false)}>Cerrar</button>.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
