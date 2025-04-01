// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA11rkC3gK9nJCKAaAP8WIUZmRiLWnB2j8",
  authDomain: "game-on-gear-a3d07.firebaseapp.com",
  projectId: "game-on-gear-a3d07",
  storageBucket: "game-on-gear-a3d07.firebasestorage.app",
  messagingSenderId: "590661830421",
  appId: "1:590661830421:web:9f5b2d2b6b449391a58b1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
