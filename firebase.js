// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import 'firebase/compat/firestore';
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6bkfoQh0Qr0GXS-lSSq2OMEf7dP9mPKY",
  authDomain: "student-data-9de15.firebaseapp.com",
  projectId: "student-data-9de15",
  storageBucket: "student-data-9de15.appspot.com",
  messagingSenderId: "61783506380",
  appId: "1:61783506380:web:41f0f9c37790e44047b169",
  measurementId: "G-BRDQ3EXTXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function login(event){
  event.preventDefault();

  const email = document.getElementById("email").value 
  const password = document.getElementById("password").value
  
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Signed in user:", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Sign-in error:", errorMessage);
  });
}

console.log(app);