// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyCh7mI8xGNjjM51pC59Rxr0YGUFz7pvQZw",
    authDomain: "mee-app-25ce0.firebaseapp.com",
    projectId: "mee-app-25ce0",
    storageBucket: "mee-app-25ce0.appspot.com",
    messagingSenderId: "978886528769",
    appId: "1:978886528769:web:cccf0f35d8cd9b16bf9500",
    measurementId: "G-DP39YV7QGE"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});