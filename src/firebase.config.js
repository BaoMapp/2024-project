
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAbtivIPH9obqMWH63vVyPTp3vwZdQmKeQ",
  authDomain: "ngonngumoi-ef643.firebaseapp.com",
  projectId: "ngonngumoi-ef643",
  storageBucket: "ngonngumoi-ef643.appspot.com",
  messagingSenderId: "678739394552",
  appId: "1:678739394552:web:29a9e987381bb5700be00d",
  measurementId: "G-NG4QHECC0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;