import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBBHfH2scnnCEmQUnANIBG6SMlYRgnjSwA",
  authDomain: "doc4life-374b9.firebaseapp.com",
  projectId: "doc4life-374b9",
  storageBucket: "doc4life-374b9.appspot.com",
  messagingSenderId: "1097793439581",
  appId: "1:1097793439581:web:81fa1bf9970ee88dbd4ab4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)
export const auth = getAuth(app);
