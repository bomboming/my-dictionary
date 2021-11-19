// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClgU3RjyXfxgbxGRjkFJbw-D0ntv0EZFw",
  authDomain: "my-dictionary-37bb8.firebaseapp.com",
  projectId: "my-dictionary-37bb8",
  storageBucket: "my-dictionary-37bb8.appspot.com",
  messagingSenderId: "81717604936",
  appId: "1:81717604936:web:e4a8e81233e3f403881e7d",
  measurementId: "G-HDD7XNSTPC",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
