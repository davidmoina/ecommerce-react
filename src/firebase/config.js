// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOfaduBONXBLzcsoKpKZ_lm3HEu1bHFFc",
  authDomain: "ecommerce-moina.firebaseapp.com",
  projectId: "ecommerce-moina",
  storageBucket: "ecommerce-moina.appspot.com",
  messagingSenderId: "181780046651",
  appId: "1:181780046651:web:6ac50855b50fe1ad524d1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);