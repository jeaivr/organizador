import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../firebase'; // Importamos Firebase
import User from '../images/user.jpg';

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
    <div className="bg-login bg-cover">
    <div className="flex justify-center items-center min-h-screen bg-white/40 shadow-lg">
        {error && <div className="text-red-500 mb-4">{error}</div>} {/* Mensaje de error */}
        <form className="w-96" onSubmit={handleLogin}>
        <img src={User} alt="profile" className="w-32 h-auto mx-auto shadow-lg rounded-full"/>
        <label className="block text-xl mx-auto font-black text-center text-gray-700 mt-2 mb-4">Jeaivr</label>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              placeholder="✉️ E-mail"
              onChange={(e) => setEmail(e.target.value)} // Guardamos el email
              className="w-full mt-1 p-2 border shadow-md border-gray-300 rounded-full"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              placeholder="🗝 Password"
              onChange={(e) => setPassword(e.target.value)} // Guardamos la contraseña
              className="w-full mt-1 p-2 border shadow-md border-gray-300 rounded-full"
              required
            />
          </div>
          <button type="submit" className="mt-2 w-full shadow-md bg-orange-500 text-white p-2 rounded-full">Iniciar sesión</button>
        </form>
      </div>
      </div>
  );
};

export default Login;
