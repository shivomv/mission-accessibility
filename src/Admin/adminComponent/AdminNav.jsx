// src/components/AdminNav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const AdminNav = () => {
  return (
    <nav className="bg-light navbar navbar-expand-lg navbar-dark sticky-top px-4 px-lg-5 py-lg-0">
      <NavLink to="/admin/dashboard" className="navbar-brand">
        <h3 className="m-0 text-primary text-uppercase"><i className="fa fa-shield-alt me-3"></i>Admin Panel</h3>
      </NavLink>
      <div className="ms-auto d-flex align-items-center">
        <Dropdown align="end">
          <Dropdown.Toggle variant="light" id="dropdown-basic" className="border-0">
            <i className="fa fa-user-circle" aria-hidden="true"></i> Profile
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={NavLink} to="/admin/profile">Profile</Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/logout">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default AdminNav;
