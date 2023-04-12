import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxw05dsrbz0ixXJF2pB5n8sdXYFbmEExY",
  authDomain: "blog-ee253.firebaseapp.com",
  projectId: "blog-ee253",
  storageBucket: "blog-ee253.appspot.com",
  messagingSenderId: "596054269514",
  appId: "1:596054269514:web:346a7b624c5e1b7c8590b3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
