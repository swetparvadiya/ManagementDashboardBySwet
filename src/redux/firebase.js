// import firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from "firebase/app";
<<<<<<< Updated upstream:src/redux/firebase.js
import { getAuth } from "firebase/auth";
=======

>>>>>>> Stashed changes:src/firebase/firebase.js

const firebaseConfig = {
    apiKey: "AIzaSyDzQLU1t8TbiDjFTG95Y06hwODWxan5OJg",
    authDomain: "react-firebase-auth-7397b.firebaseapp.com",
    projectId: "react-firebase-auth-7397b",
    storageBucket: "react-firebase-auth-7397b.appspot.com",
    messagingSenderId: "505544599058",
    appId: "1:505544599058:web:714462b520eee55ef5dacb"
  };
const  firebase = initializeApp(firebaseConfig);

<<<<<<< Updated upstream:src/redux/firebase.js
  const auth = getAuth;
  // const googleAuthProvider = new firebase.auth.googleAuthProvider();
  
  export {auth};
=======
  export const app = initializeApp(firebaseConfig);
>>>>>>> Stashed changes:src/firebase/firebase.js
