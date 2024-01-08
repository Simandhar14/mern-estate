// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-81da3.firebaseapp.com",
  projectId: "mern-estate-81da3",
  storageBucket: "mern-estate-81da3.appspot.com",
  messagingSenderId: "705781449336",
  appId: "1:705781449336:web:cb5563b94d69d4bea4a38d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
