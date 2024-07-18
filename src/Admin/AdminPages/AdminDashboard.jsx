import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const pages = [
    {
      name: 'Home',
      path: '/admin/manage/Home',
      icon: 'bi-house-door', // Bootstrap Icons class for Home
    },
    {
      name: 'About Us',
      path: '/admin/manage/about',
      icon: 'bi-info-circle', // Bootstrap Icons class for About Us
    },
    {
      name: 'Services',
      path: '/admin/manage/services',
      icon: 'bi-gear', // Bootstrap Icons class for Services
    },
    {
      name: 'Contact Us',
      path: '/admin/manage/contact',
      icon: 'bi-envelope', // Bootstrap Icons class for Contact Us
    },
  ];

  return (
    <div className="container mt-4">
      <h5 className="card-title mb-3">Website Pages</h5>
      <div className="row">
        {pages.map((page, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card h-100 border-primary shadow">
              <div className="card-body">
                <Link to={page.path} className="text-decoration-none text-dark">
                  <div className="d-flex justify-content-center align-items-center mb-3" style={{ height: '100px' }}>
                    <i className={`bi ${page.icon} fs-2`}></i>
                  </div>
                  <h5 className="card-title text-center">{page.name}</h5>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
