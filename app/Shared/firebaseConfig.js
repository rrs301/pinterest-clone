// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsVcT58u5fnibQqpN2sX_OEggbFp0bYqs",
  authDomain: "tubeguruji-app.firebaseapp.com",
  projectId: "tubeguruji-app",
  storageBucket: "tubeguruji-app.appspot.com",
  messagingSenderId: "887202519021",
  appId: "1:887202519021:web:584d0b453269ff8df979e4",
  measurementId: "G-GXD1PVGG7Z"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 
export default app;