import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFlqg9J7Y6zytHNY-isOiPvgZlK1i5EQ8",
  authDomain: "thefootballstore-141f0.firebaseapp.com",
  projectId: "thefootballstore-141f0",
  storageBucket: "thefootballstore-141f0.appspot.com",
  messagingSenderId: "636226002574",
  appId: "1:636226002574:web:cca19ff003a2904505f3df",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
