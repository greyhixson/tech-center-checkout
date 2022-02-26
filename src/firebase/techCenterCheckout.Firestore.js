// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCWz4NdhSuvxA-pOEEr4kCFFDRRvFKt9S0',
  authDomain: 'tech-center-checkout.firebaseapp.com',
  databaseURL: 'https://tech-center-checkout-default-rtdb.firebaseio.com',
  projectId: 'tech-center-checkout',
  storageBucket: 'tech-center-checkout.appspot.com',
  messagingSenderId: '913017175437',
  appId: '1:913017175437:web:453f659b92e3b14af391c4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
