import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCMK12MBVTufAE3zND5vHAlXfcJzvUauyg",
    authDomain: "social-network-98611.firebaseapp.com",
    projectId: "social-network-98611",
    storageBucket: "social-network-98611.appspot.com",
    messagingSenderId: "222970913747",
    appId: "1:222970913747:web:58d3bee9f09c0a2f97c526",
    measurementId: "G-JGS2BES382"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export default firebase;