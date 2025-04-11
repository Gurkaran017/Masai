const firebaseConfig = {
    apiKey: "MY_API_KEY",
    authDomain: "MY_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://MY_PROJECT_ID.firebaseio.com",
    projectId: "MY_PROJECT_ID",
    storageBucket: "MY_PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.database();
  