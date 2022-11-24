// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBwIvsv_HEhiX1I5yg_oK8DE9vF9ClPWM",
    authDomain: "saine-ecommerce.firebaseapp.com",
    projectId: "saine-ecommerce",
    storageBucket: "saine-ecommerce.appspot.com",
    messagingSenderId: "23855053311",
    appId: "1:23855053311:web:81dc1fe9faa4f52327cfca",
    measurementId: "G-7TBJ4CEQHK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);
export const auth = getAuth(app);
