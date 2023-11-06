// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

//use firebase auth apis
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO5cRZdw-GgjYM2mSYB0Xwu0X5xheeErI",
  authDomain: "fir-intro-7badd.firebaseapp.com",
  projectId: "fir-intro-7badd",
  storageBucket: "fir-intro-7badd.appspot.com",
  messagingSenderId: "493953663864",
  appId: "1:493953663864:web:459ade0bee93d8c9f53e8d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore();
