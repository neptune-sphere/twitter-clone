import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {

    apiKey: "AIzaSyDJSWSv4o9oeqAmUNbUh7k5BV28uG6ona8",
  
    authDomain: "twitter-clone-31e98.firebaseapp.com",
  
    projectId: "twitter-clone-31e98",
  
    storageBucket: "twitter-clone-31e98.appspot.com",
  
    messagingSenderId: "81336215509",
  
    appId: "1:81336215509:web:b8794b708168dd1a9b7f5c",
  
    measurementId: "G-KEXFP6Q2B0"
  
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export default db;