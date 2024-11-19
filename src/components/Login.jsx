import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../firebase'; // Importamos Firebase

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); // Autenticación con Firebase
      onLogin(true); // Si el login es exitoso, activamos el dashboard
    } catch (err) {
      setError('Credenciales incorrectas'); // Si ocurre un error, mostramos el mensaje
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>} {/* Mensaje de error */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Guardamos el email
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Guardamos la contraseña
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
