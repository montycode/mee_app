import React from 'react';
import { render } from 'react-dom';

import { App } from '@/App';

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
        }).catch(registrationError => {
            console.log(registrationError);
        });
    });
}

render(
    <App />,
    document.getElementById('app')
);