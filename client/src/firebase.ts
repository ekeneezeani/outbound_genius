// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU4sLwKFPF7SEXoT8Xmo2OsR5OqlOj_I4",
  authDomain: "outbound-g-interview.firebaseapp.com",
  projectId: "outbound-g-interview",
  storageBucket: "outbound-g-interview.appspot.com",
  messagingSenderId: "568221863494",
  appId: "1:568221863494:web:ebdb080e7a70fd0efd0447",
  measurementId: "G-D0T1N3MQ33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()