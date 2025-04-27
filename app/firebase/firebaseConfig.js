// firebase/firebaseConfig.js
import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyCLE5-SRVLfWwuEb4_yY4KxU1qXij-cj64",
    authDomain: "yny-solutions.firebaseapp.com",
    projectId: "yny-solutions",
    storageBucket: "yny-solutions.firebasestorage.app",
    messagingSenderId: "559642412809",
    appId: "1:559642412809:web:f62f7539cdad0849b775d8",
    measurementId: "G-CF1B8M886E"
  };
  

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
