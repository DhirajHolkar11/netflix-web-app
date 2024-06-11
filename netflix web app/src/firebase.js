// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey:   process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain:   process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId:    process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket:    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId:    process.env.REACT_APP_MESSAGING_SENDER,
//     appId:    process.env.REACT_APP_APP_ID
//   };
  
//   // Initialize Firebase
//   export const app = initializeApp(firebaseConfig);
//   export const auth = getAuth(app);
  
  










  
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import {getAuth} from "firebase/auth";
  import {getFirestore} from "firebase/firestore";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCZmIVq5T2AHP7RgGNLPtA62QxYQLeVLrY",
    authDomain: "react-tailwind-netflix-website.firebaseapp.com",
    projectId: "react-tailwind-netflix-website",
    storageBucket: "react-tailwind-netflix-website.appspot.com",
    messagingSenderId: "98621931016",
    appId: "1:98621931016:web:ad48c805648d27bdc21bbd"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  