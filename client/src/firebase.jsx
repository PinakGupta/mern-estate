// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-81bae.firebaseapp.com",
  projectId: "mern-estate-81bae",
  storageBucket: "mern-estate-81bae.appspot.com",
  messagingSenderId: "304876578010",
  appId: "1:304876578010:web:d78c495fcf8d83476531e3",
  measurementId: "G-03X9EZYV1J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);