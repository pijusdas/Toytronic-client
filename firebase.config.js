// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjk714F_I8vlbcQ110NoHxOvYQ2SvTuY4",
  authDomain: "toytronics-clients.firebaseapp.com",
  projectId: "toytronics-clients",
  storageBucket: "toytronics-clients.appspot.com",
  messagingSenderId: "825909818487",
  appId: "1:825909818487:web:5acedbcf9aafdff9c90272"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app