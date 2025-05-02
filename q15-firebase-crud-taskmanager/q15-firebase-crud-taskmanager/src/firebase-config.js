// src/firebase-config.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "2187127",
  authDomain: "gk281.firebaseapp.com",
  projectId: "",
  storageBucket: "gk21.appspot.com",
  messagingSenderId: "him91_id",
  appId: "3772"
};

const app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore();
