// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyoO9Bsq-2cniU9WDFoi-6iC0a0C2EYeo",
    authDomain: "pruebaproyectofi.firebaseapp.com",
    projectId: "pruebaproyectofi",
    storageBucket: "pruebaproyectofi.appspot.com",
    messagingSenderId: "290866197966",
    appId: "1:290866197966:web:a19d13b0cd975159e1a79f",
    measurementId: "G-FLNPYB1C0N",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth= getAuth(app)