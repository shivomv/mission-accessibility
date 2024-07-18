// src/App.jsx
import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import AdminLayout from './Admin/AdminLayout/AdminLayout';
import Login from './Admin/AdminPages/other/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock authentication check
  const authenticateUser = (email, password) => {
    // Implement actual authentication logic here
    if (email === 'admin@example.com' && password === 'password') {
      setIsAuthenticated(true);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<DefaultLayout />} />
        <Route path="/login" element={<Login authenticateUser={authenticateUser} />} />
        <Route path="/admin/*" element={<AdminLayout isAuthenticated={isAuthenticated} />} />
      </Routes>
    </Router>
  );
};

export default App;
