import React, { useState } from 'react';
import axios from 'axios';

const PdfUploader = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para manejar el cambio de archivo
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
    } else {
      alert('Por favor, selecciona un archivo PDF');
    }
  };

  // Función para manejar la subida del archivo
  const handleUpload = async () => {
    if (!file) {
      alert('Por favor, selecciona un archivo PDF para cargar.');
      return;
    }

    setLoading(true);
    setError(null);

    // Crear un objeto FormData para enviar el archivo
    const formData = new FormData();
    formData.append('file', file); // Añadimos el archivo
    formData.append('upload_preset', 'test12'); // Asegúrate de poner tu preset de Cloudinary
    formData.append('resource_type', 'raw'); // Especificamos que es un archivo raw (PDF)

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/ddsh7sc4i/raw/upload', // Cambia 'tu_cloud_name' por el nombre de tu cuenta de Cloudinary
        formData
      );

      // Llamamos a onUploadSuccess para pasar la URL del archivo
      onUploadSuccess(response.data.secure_url);
    } catch (err) {
      setError('Hubo un error al subir el archivo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4"
      />
      <br/>
      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {loading ? 'Subiendo...' : 'Subir nuevo PDF'}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default PdfUploader;
