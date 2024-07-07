// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { API_KEY } from "./utils";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "chat-90ad2.firebaseapp.com",
  projectId: "chat-90ad2",
  storageBucket: "chat-90ad2.appspot.com",
  messagingSenderId: "603179045938",
  appId: "1:603179045938:web:7ce1bb57fe35f0e565582b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()