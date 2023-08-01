import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "primerecommerce-ec24d.firebaseapp.com",
  projectId: "primerecommerce-ec24d",
  storageBucket: "primerecommerce-ec24d.appspot.com",
  messagingSenderId: "46702191925",
  appId: "1:46702191925:web:88c12c79615fcf83bb187c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
