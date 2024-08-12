// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAc1g0NErqZHw5ORcq8s6GyOdVT-hdTZ0w",
    authDomain: "authentication-b5ea0.firebaseapp.com",
    projectId: "authentication-b5ea0",
    storageBucket: "authentication-b5ea0.appspot.com",
    messagingSenderId: "445504205317",
    appId: "1:445504205317:web:d769adf5097b4550cd626c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
