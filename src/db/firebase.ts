import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBuwEq_Jc3buD1sEXXFzOTSJ1nqs2hSXoM",
  authDomain: "bozeca-123a8.firebaseapp.com",
  projectId: "bozeca-123a8",
  storageBucket: "bozeca-123a8.appspot.com",
  messagingSenderId: "143342716551",
  appId: "1:143342716551:web:c3a7eee59c34c606bcda22"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);