// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL0A3-QvXgresGPwhF3_UPlKeJrUjt2nk",
  authDomain: "islamic-learn.firebaseapp.com",
  projectId: "islamic-learn",
  storageBucket: "islamic-learn.appspot.com",
  messagingSenderId: "339183683626",
  appId: "1:339183683626:web:55d60c02a5efbff53a5b53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;