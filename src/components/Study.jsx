import React from 'react';
import Navbar from './Navbar'; // Importamos la Navbar

const Study = ({ onLogout }) => {

  const excelUrl = `https://docs.google.com/spreadsheets/d/1cna37rn-eVucRzaCFIOVJw0uvCNrfnque4PB6LA4PJ4/edit?usp=sharing&widget=false&chrome=false&headers=false&rm=demo`

  return (
    <div className="min-h-screen bg-cover bg-login">
      <div className="bg-white/40 min-h-screen">
        {/* Navbar recibe onLogout */}
        <Navbar onLogout={onLogout} />
        <div className="container mx-auto p-6 mt-16">
          <h1 className="text-3xl font-semibold mb-4">Estudio</h1>
          <p className="text-lg mb-4">Este es tu organizador de estudio</p>
          <iframe
              title="study"
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

export default Study;