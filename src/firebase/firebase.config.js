// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT_8QKRKwIeLTZ4n_zsB8yloXAeewRIwo",
  authDomain: "food-recipe-client-side.firebaseapp.com",
  projectId: "food-recipe-client-side",
  storageBucket: "food-recipe-client-side.appspot.com",
  messagingSenderId: "815334666474",
  appId: "1:815334666474:web:6e974c2d4ac988256fa793"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;