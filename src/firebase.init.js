// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYemCFP2fsSPIZAVaXBna03Fgqi8dP9HA",
    authDomain: "computer-warehouse-client.firebaseapp.com",
    projectId: "computer-warehouse-client",
    storageBucket: "computer-warehouse-client.appspot.com",
    messagingSenderId: "1058551724916",
    appId: "1:1058551724916:web:db73b19d3f3a688c8c0a21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;