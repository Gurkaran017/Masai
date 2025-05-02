// src/firebase-config.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "82172",
  authDomain: "gk.firebaseapp.com",
  projectId: "gk872187",
  storageBucket: "gk28u9232.appspot.com",
  messagingSenderId: "him327",
  appId: "8723"
};

const app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore();
