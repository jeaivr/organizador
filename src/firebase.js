// Importa las funciones que necesitas desde Firebase SDK
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';  // Importamos la autenticación
import { getStorage } from 'firebase/storage'; // Importar Firebase Storage
// Configuración de tu app de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA83LYlAZc9NXQNyOWr2U3kiooAlBiRj4M",
  authDomain: "org-jeaivr.firebaseapp.com",
  projectId: "org-jeaivr",
  storageBucket: "org-jeaivr.firebasestorage.app",
  messagingSenderId: "946975264027",
  appId: "1:946975264027:web:838b4d89f7b28c877e97be",
  measurementId: "G-BXEG8XD8HE"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa la autenticación
const auth = getAuth(app);
const storage = getStorage(app);

// Exporta la instancia de autenticación y la función para login
export { auth, storage, signInWithEmailAndPassword };
