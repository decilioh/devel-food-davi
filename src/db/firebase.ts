import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.VITE_BASE_URL_API_KEY,
  authDomain: process.env.VITE_BASE_URL_AUTH_DOMAIN,
  projectId: process.env.VITE_BASE_URL_PROJECT_ID,
  storageBucket: process.env.VITE_BASE_URL_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_BASE_URL_MESSAGING_SENDER_ID,
  appId: process.env.VITE_BASE_URL_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);