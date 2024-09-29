// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPiwzzxJZbqsMxy3wZQZ_Lk7CSMg4y-Ng",
  authDomain: "hs-chat-27579.firebaseapp.com",
  projectId: "hs-chat-27579",
  storageBucket: "hs-chat-27579.appspot.com",
  messagingSenderId: "485494447996",
  appId: "1:485494447996:web:9567f4fc1f0e07788a4ef9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase auth hzimetlerine erişebilmek için kurulum
export const auth = getAuth(app);

// google auth hizmetini kullanbilmek için kurulu
export const provider = new GoogleAuthProvider();

// firestore veritbanının kurulumunu yap
export const db = getFirestore(app);
