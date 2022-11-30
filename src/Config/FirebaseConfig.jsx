import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA7MOSP4II5AxHVmaLjRqLXR3p0pXbA1m4",
    authDomain: "auth-fe878.firebaseapp.com",
    projectId: "auth-fe878",
    storageBucket: "auth-fe878.appspot.com",
    messagingSenderId: "715150248513",
    appId: "1:715150248513:web:88ea46191483a02b6714c0",
    measurementId: "G-8M08V8VMHW"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;