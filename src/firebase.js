// Importa las funciones que necesitas desde Firebase SDK
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';  // Importamos la autenticación
import { getStorage } from 'firebase/storage'; // Importar Firebase Storage
// Configuración de tu app de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAEhN33bldr7Xj6VmVTViF2S1OjoSV5HH8",
  authDomain: "jeaivr.firebaseapp.com",
  projectId: "jeaivr",
  storageBucket: "jeaivr.firebasestorage.app",
  messagingSenderId: "366913848873",
  appId: "1:366913848873:web:d965b0ac277af95eabbe38"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa la autenticación
const auth = getAuth(app);
const storage = getStorage(app);

// Exporta la instancia de autenticación y la función para login
export { auth, storage, signInWithEmailAndPassword };
