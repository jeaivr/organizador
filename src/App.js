import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <Dashboard /> // Si el usuario está autenticado, mostramos el Dashboard
      ) : (
        <Login onLogin={setIsAuthenticated} /> // Si no, mostramos el Login
      )}
    </div>
  );
};

export default App;
