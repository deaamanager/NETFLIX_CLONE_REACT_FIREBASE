
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBqByDI-MFyqab_2EhSsSzg7OJ1YY3j4Z0",
    authDomain: "netflex-clone-a2c65.firebaseapp.com",
    projectId: "netflex-clone-a2c65",
    storageBucket: "netflex-clone-a2c65.appspot.com",
    messagingSenderId: "536947691822",
    appId: "1:536947691822:web:2de46736a45298b5f0aabf",
    measurementId: "G-PF74LNP57P"
  };
  


 const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider();

export { auth };
export { google };
export default db;