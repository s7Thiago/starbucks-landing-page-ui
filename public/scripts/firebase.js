// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnkcthr5giZtl4ny7XZ-QELdhiYqTBXLE",
    authDomain: "my-starbucks-sample-2021.firebaseapp.com",
    projectId: "my-starbucks-sample-2021",
    storageBucket: "my-starbucks-sample-2021.appspot.com",
    messagingSenderId: "643243962532",
    appId: "1:643243962532:web:fe18850a68b420f868b631",
    measurementId: "G-4CJR6981ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);