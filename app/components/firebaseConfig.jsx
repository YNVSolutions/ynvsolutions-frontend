import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMT2ZV1tMLVn5uIgm7n49hDrZMSMgUkg4",
  authDomain: "ynv-tech.firebaseapp.com",
  projectId: "ynv-tech",
  storageBucket: "ynv-tech.firebasestorage.app",
  messagingSenderId: "1008435640435",
  appId: "1:1008435640435:web:dce1a4a5bac0ed2e63d206",
  measurementId: "G-8S7ZNCGRDE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};