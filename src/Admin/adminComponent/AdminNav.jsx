// src/components/AdminNav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminNav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top px-4 px-lg-5 py-lg-0">
      <NavLink to="/admin/dashboard" className="navbar-brand">
        <h1 className="m-0 text-primary text-uppercase"><i className="fa fa-shield-alt me-3"></i>Admin Panel</h1>
      </NavLink>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto">
          <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Dashboard</NavLink>
          <NavLink to="/admin/settings" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Settings</NavLink>
          {/* Add more admin nav links here */}
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
