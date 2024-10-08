// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9CQUBSw4MI9wA_1hqvzZgrcxWYuIoDZg",
  authDomain: "car-doctor-264ed.firebaseapp.com",
  projectId: "car-doctor-264ed",
  storageBucket: "car-doctor-264ed.appspot.com",
  messagingSenderId: "1023913101237",
  appId: "1:1023913101237:web:b8537a523f9fd866953bfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;