// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAu55LE8hF5dHO8rJP-0eJvl6NCtvFj5Mo",
    authDomain: "challenge-ed3d2.firebaseapp.com",
    databaseURL: "https://challenge-ed3d2-default-rtdb.firebaseio.com",
    projectId: "challenge-ed3d2",
    storageBucket: "challenge-ed3d2.appspot.com",
    messagingSenderId: "146011441794",
    appId: "1:146011441794:web:15d5ca47bf83a624e2829b",
    measurementId: "G-4LN2390GS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:9099");

// const loginEmailPassword = async (email, password) => {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     console.log(userCredential)
// }

export { auth };