import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyAFlqg9J7Y6zytHNY-isOiPvgZlK1i5EQ8",
//   authDomain: "thefootballstore-141f0.firebaseapp.com",
//   projectId: "thefootballstore-141f0",
//   storageBucket: "thefootballstore-141f0.appspot.com",
//   messagingSenderId: "636226002574",
//   appId: "1:636226002574:web:cca19ff003a2904505f3df",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCf3Gy9Cw06EBGhYmqLVmDjbk9pnqE37W4",
  authDomain: "ecommerce-566e0.firebaseapp.com",
  projectId: "ecommerce-566e0",
  storageBucket: "ecommerce-566e0.appspot.com",
  messagingSenderId: "616815970518",
  appId: "1:616815970518:web:9a3d0434c3fad40e2c2177",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
