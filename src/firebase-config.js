// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfhIbDYEoMPVokZI0jFTSpXKHXcDyhud8",
  authDomain: "perinita-46678.firebaseapp.com",
  projectId: "perinita-46678",
  storageBucket: "perinita-46678.firebasestorage.app",
  messagingSenderId: "118968937551",
  appId: "1:118968937551:web:9f2a81fb66b05794eace3a",
  measurementId: "G-BFQTQ3BPRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);