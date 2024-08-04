// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiV-85BXJBnOUuZmkCy-VfwwYCxvYZJ2o",
  authDomain: "inventory-management-9e3ae.firebaseapp.com",
  projectId: "inventory-management-9e3ae",
  storageBucket: "inventory-management-9e3ae.appspot.com",
  messagingSenderId: "76515642062",
  appId: "1:76515642062:web:d48514fa481ed666c8de9f",
  measurementId: "G-JD2T5KYM23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}