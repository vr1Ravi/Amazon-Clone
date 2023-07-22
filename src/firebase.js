import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCMQ2OSw3d3eb17yuy_C6t1d4CfC0WwPd0",
  authDomain: "clone-26395.firebaseapp.com",
  projectId: "clone-26395",
  storageBucket: "clone-26395.appspot.com",
  messagingSenderId: "639394684119",
  appId: "1:639394684119:web:3d0c1b0c95ab78f4d42492",
  measurementId: "G-8WEKVL1050",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
