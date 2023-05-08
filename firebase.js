
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB3oqlQ1uCOXzY93WLwI7LJxCb2saGkuLc",
  authDomain: "react-notes-5c823.firebaseapp.com",
  projectId: "react-notes-5c823",
  storageBucket: "react-notes-5c823.appspot.com",
  messagingSenderId: "336672602233",
  appId: "1:336672602233:web:7837ca7f63a60fccbc3ca8",
  measurementId: "G-39943CHXJX"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")