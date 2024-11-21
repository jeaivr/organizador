import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  return (
    <div className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50">
      <h1 className="text-xl font-bold">Organizador de Estudio</h1>
      <div className="space-x-6">
        <Link
          to="/"
          className="hover:text-gray-200 transition duration-200"
        >
          Dashboard
        </Link>
      </div>
      <button
        onClick={onLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Navbar;
