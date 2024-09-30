// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4fvbxu9GHVMk6hGebJZC4dmUn0mt9yXw",
  authDomain: "hs-twitter-1a971.firebaseapp.com",
  projectId: "hs-twitter-1a971",
  storageBucket: "hs-twitter-1a971.appspot.com",
  messagingSenderId: "110124685135",
  appId: "1:110124685135:web:704da11806567466f0173a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referansını al
export const auth = getAuth(app);

// google sağlaycısının kurulumu
export const provider = new GoogleAuthProvider();

// veritabanının referansını al
export const db = getFirestore(app);

// medya depolama alanının referansını al
export const storage = getStorage(app);
