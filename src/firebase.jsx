import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdTvY0IOjLJPRt8ZI42SYD9rhLY31VYic",
  authDomain: "certffty.firebaseapp.com",
  projectId: "certffty",
  storageBucket: "certffty.firebasestorage.app",
  messagingSenderId: "107190053000",
  appId: "1:107190053000:web:be6a45a55e0842a361173d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider}