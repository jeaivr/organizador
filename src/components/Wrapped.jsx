import React from 'react';
import Navbar from './Navbar'; // Importamos la Navbar

const Habits = ({ onLogout }) => {

  const excelUrl = `https://docs.google.com/spreadsheets/d/1nqgXrDgtFl4H5zJSG5G5ijInKyH_AK3G2a6amvlIugY/edit?usp=sharing&widget=false&chrome=false&headers=false&rm=demo`

  return (
    <div className="min-h-screen bg-cover bg-login">
      <div className="bg-white/40 min-h-screen">
        {/* Navbar recibe onLogout */}
        <Navbar onLogout={onLogout} />
        <div className="container mx-auto p-6 pt-32">
          <h1 className="text-3xl font-semibold mb-4">Wrapped</h1>
          <p className="text-lg mb-4">A ver si no entramos mucho aquí este 2025</p>
          <iframe
              title="habits"
              width="100%"
              style={{ height: "75vh" }}
              src={excelUrl}>
              {/* rm=embedded rm=demo rm=minimal */}
            </iframe>
          </div>
        </div>
    </div>
  );
};

export default Habits;