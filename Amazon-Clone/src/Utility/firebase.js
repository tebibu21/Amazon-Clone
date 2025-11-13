// src/Utility/firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUW0ZUmteenqDSOfOswxJXZJ9VZijfKk8",
  authDomain: "clone-13cf4.firebaseapp.com",
  projectId: "clone-13cf4",
  storageBucket: "clone-13cf4.appspot.com", // ✅ fixed (should end with .appspot.com)
  messagingSenderId: "363135392255",
  appId: "1:363135392255:web:18e50e5eb1716c00802fca",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
