// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmjk53B3Y_D_kHJhGC66eODyFbPDQ6hes",
    authDomain: "starbucks-landing-page-75016.firebaseapp.com",
    projectId: "starbucks-landing-page-75016",
    storageBucket: "starbucks-landing-page-75016.appspot.com",
    messagingSenderId: "82907133064",
    appId: "1:82907133064:web:9b8034eec71a2ee3965b3d",
    measurementId: "G-3ZKB7H2L2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);