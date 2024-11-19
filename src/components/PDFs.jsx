import React, { useState } from 'react';
import PdfUploader from './PdfUploader';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Importamos la Navbar

const Pdfs = ({ onLogout })  => {
  const [uploadedPdfUrl, setUploadedPdfUrl] = useState(null);

  // Función para manejar el éxito de la subida
  const handleUploadSuccess = (url) => {
    setUploadedPdfUrl(url); // Guardamos la URL del PDF subido
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar recibe onLogout */}
      <Navbar onLogout={onLogout} />

      <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Bienvenido al Dashboard</h1>

        <p className="text-lg mb-4">Aquí puedes gestionar tus apuntes y ver tus archivos PDF subidos.</p>
        {/* Componente de carga de PDF */}
        <PdfUploader onUploadSuccess={handleUploadSuccess} />

        {/* Mostrar el enlace al PDF subido */}
        {uploadedPdfUrl && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">PDF Subido</h3>
            <a
              href={uploadedPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Ver PDF
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pdfs;
