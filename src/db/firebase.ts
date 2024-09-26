// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuwEq_Jc3buD1sEXXFzOTSJ1nqs2hSXoM",
  authDomain: "bozeca-123a8.firebaseapp.com",
  projectId: "bozeca-123a8",
  storageBucket: "bozeca-123a8.appspot.com",
  messagingSenderId: "143342716551",
  appId: "1:143342716551:web:c3a7eee59c34c606bcda22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);