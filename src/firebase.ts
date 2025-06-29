// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKR5Gboll2p3G112qTNr4l4MjAbGkHZfw",
  authDomain: "familysupply-6cd11.firebaseapp.com",
  projectId: "familysupply-6cd11",
  storageBucket: "familysupply-6cd11.firebasestorage.app",
  messagingSenderId: "559989660185",
  appId: "1:559989660185:web:9ea9069002dffd00bc6888",
  measurementId: "G-TG2789RC75"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
