// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMQ2OSw3d3eb17yuy_C6t1d4CfC0WwPd0",
  authDomain: "clone-26395.firebaseapp.com",
  projectId: "clone-26395",
  storageBucket: "clone-26395.appspot.com",
  messagingSenderId: "639394684119",
  appId: "1:639394684119:web:3d0c1b0c95ab78f4d42492",
  measurementId: "G-8WEKVL1050",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
