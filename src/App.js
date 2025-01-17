import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Study from './components/Study';
import Sport from './components/Sport';
import Wrapped from './components/Wrapped';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar si ya está autenticado al cargar la página
    const authData = localStorage.getItem('isAuthenticated');
    if (authData === 'true') {
      setIsAuthenticated(true);
    }

    // Desautenticar después de 2 horas
    const timer = setTimeout(() => {
      localStorage.removeItem('isAuthenticated');
      setIsAuthenticated(false);
    }, 2 * 60 * 60 * 1000); // 2 horas

    // Limpiar el timer cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    // Cuando el usuario se loguea
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Cuando el usuario se desloguea
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        {isAuthenticated ? (
          <Routes>
            {/* Pasar handleLogout como prop al Dashboard */}
            <Route path="/" element={<Dashboard onLogout={handleLogout} />} />
            <Route path="/estudio" element={<Study onLogout={handleLogout} />} />
            <Route path="/deporte" element={<Sport onLogout={handleLogout} />} />
            <Route path="/wrapped" element={<Wrapped onLogout={handleLogout} />} />
          </Routes>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
};

export default App;
