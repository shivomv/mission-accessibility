import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const isGalleryActive = location.pathname.startsWith('/image-gallery') || location.pathname.startsWith('/video-gallery');

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
      <NavLink to="/" className="navbar-brand">
        <h1 className="m-0 text-primary text-uppercase"><i className="fa fa-book-reader me-3"></i>mission accessibility</h1>
      </NavLink>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto">
          <NavLink to="/home" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>About Us</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Blog</NavLink>
          <div className={`nav-item dropdown ${isGalleryActive ? 'active' : ''}`}>
            <NavLink  className="nav-link dropdown-toggle " data-bs-toggle="dropdown">Gallery</NavLink>
            <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
              <NavLink to="/image-gallery" className="dropdown-item">Image Gallery</NavLink>
              <NavLink to="/video-gallery" className="dropdown-item">Video Gallery</NavLink>
            </div>
          </div>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Contact Us</NavLink>
        </div>
        <NavLink to="/join" className="btn btn-primary rounded-pill px-3 d-none d-lg-block">Join Us<i className="fa fa-arrow-right ms-3"></i></NavLink>
      </div>
    </nav>
  )
}

export default Nav;
