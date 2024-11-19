import React from 'react';
import Navbar from './Navbar'; // Importamos la Navbar

const Dashboard = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar recibe onLogout */}
      <Navbar onLogout={onLogout} />

      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-4">Bienvenido al Dashboard</h1>
        <p className="text-lg mb-4">Aquí puedes gestionar tus apuntes y ver tus archivos PDF subidos.</p>
      </div>
    </div>
  );
};

export default Dashboard;
