import React from 'react';
import Navbar from './Navbar'; // Importamos la Navbar

const Dashboard = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar recibe onLogout */}
      <Navbar onLogout={onLogout} />
      <div className="container mx-auto p-6 mt-16">
        <h1 className="text-3xl font-semibold mb-4">Bienvenido al Dashboard</h1>
        <h1 className="text-2xl font-semibold mb-4">Calendario</h1>
        <h1 className="text-2xl font-semibold mb-4">Registro de peso</h1>
      </div>
    </div>
  );
};

export default Dashboard;
