// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import  firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyD9qLGaZ7zwehyqHWuuFnYNgo4KLrCBYpQ",
    authDomain: "linkedin-clone-47598.firebaseapp.com",
    projectId: "linkedin-clone-47598",
    storageBucket: "linkedin-clone-47598.appspot.com",
    messagingSenderId: "829789448880",
    appId: "1:829789448880:web:0695fffbb99ce2dbfaa975",
    measurementId: "G-LSBQNJJM14"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth }