// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjVJyKe0Eicv2Oy1oL2xsDdc-EEiLvFaM",
  authDomain: "netflix-gpt-6d99f.firebaseapp.com",
  projectId: "netflix-gpt-6d99f",
  storageBucket: "netflix-gpt-6d99f.appspot.com",
  messagingSenderId: "790595151247",
  appId: "1:790595151247:web:f8368fc0bea53f62e517fa",
  measurementId: "G-0W96Y1VB1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();