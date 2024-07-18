// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH600QKdvXKdOY5TXvx3HWBbCqZaSJTA0",
  authDomain: "expense-tracker-b6377.firebaseapp.com",
  projectId: "expense-tracker-b6377",
  storageBucket: "expense-tracker-b6377.appspot.com",
  messagingSenderId: "240575800595",
  appId: "1:240575800595:web:f6c784d957fdf38a2666e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;