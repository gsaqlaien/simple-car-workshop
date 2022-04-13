// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWZhg7rL15ZImu2WB5ptlr6t524Sn3th4",
    authDomain: "simple-car-workshop.firebaseapp.com",
    projectId: "simple-car-workshop",
    storageBucket: "simple-car-workshop.appspot.com",
    messagingSenderId: "855862325336",
    appId: "1:855862325336:web:2a19b12d08e130cf495a2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;