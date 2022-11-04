// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0AwNCuh3awG6PHKeRz_mi0H-44XFlhco",
  authDomain: "taka-earth.firebaseapp.com",
  projectId: "taka-earth",
  storageBucket: "taka-earth.appspot.com",
  messagingSenderId: "322631696794",
  appId: "1:322631696794:web:c631f4be9da0211369fa23"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/192.png",
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});