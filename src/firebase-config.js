// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZwvcmZ2GbveS8kuZ6Ozk_O2p0z_7olt8",
  authDomain: "ecommerce-website-9c421.firebaseapp.com",
  projectId: "ecommerce-website-9c421",
  storageBucket: "ecommerce-website-9c421.appspot.com",
  messagingSenderId: "750736882982",
  appId: "1:750736882982:web:474b5e2f69babf65a015e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);