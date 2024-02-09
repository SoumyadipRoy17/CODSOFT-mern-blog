// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-8a0cb.firebaseapp.com",
  projectId: "mern-blog-8a0cb",
  storageBucket: "mern-blog-8a0cb.appspot.com",
  messagingSenderId: "1079548352189",
  appId: "1:1079548352189:web:0b58a17ec736b3d77c89d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
