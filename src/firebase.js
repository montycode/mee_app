import firebase from 'firebase/app';
import 'firebase/messaging';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCh7mI8xGNjjM51pC59Rxr0YGUFz7pvQZw",
  authDomain: "mee-app-25ce0.firebaseapp.com",
  projectId: "mee-app-25ce0",
  storageBucket: "mee-app-25ce0.appspot.com",
  messagingSenderId: "978886528769",
  appId: "1:978886528769:web:cccf0f35d8cd9b16bf9500",
  measurementId: "G-DP39YV7QGE"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
  return messaging.getToken({vapidKey: 'BCpAP1ZYsqZVVFt6qFnDTmeB5uVgrG4Q1JNIUuk4GX1yZEL85cM-51E9ovF10MqM_93Rn1UeLduKO7_e0WEGVjQ'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});