// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8GFr_mIZa8Ye1Tp8EN57njvOMfCnhdvM",
  authDomain: "animax-4357.firebaseapp.com",
  projectId: "animax-4357",
  storageBucket: "animax-4357.appspot.com",
  messagingSenderId: "419666464535",
  appId: "1:419666464535:web:f44fe0a3a0271bf0a6f152",
  measurementId: "G-WLVL841GW5"
};

// Initialize Firebase


export const animax = initializeApp(firebaseConfig);
export const analytics = getAnalytics(animax);
export const auth=getAuth();