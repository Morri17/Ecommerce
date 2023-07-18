import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//esta funcion se usa para conectarnos con firebase
//getfirestore se usa para tener un instancia del firestore.

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwAJvy4wRIXDbEa1CVNSPtPw6I6hrT7As",
  authDomain: "primerecommerce-ec24d.firebaseapp.com",
  projectId: "primerecommerce-ec24d",
  storageBucket: "primerecommerce-ec24d.appspot.com",
  messagingSenderId: "46702191925",
  appId: "1:46702191925:web:88c12c79615fcf83bb187c",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
//debemos exportar la referencia para que este disponible en toda la app
