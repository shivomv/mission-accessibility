import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const isGalleryActive = location.pathname.startsWith('/image-gallery') || location.pathname.startsWith('/video-gallery');

  // Define navigation items as an array of objects
  const navItems = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    { path: '/gallery', label: 'Gallery', subItems: [
      { path: '/image-gallery', label: 'Image Gallery' },
      { path: '/video-gallery', label: 'Video Gallery' }
    ]},
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
      <NavLink to="/" className="navbar-brand">
        {/* <h1 className="m-0 text-primary text-uppercase">Logo</h1> */}
        <img src="img/MALogo.png" height={50}/>
      </NavLink>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              {item.subItems ? (
                <div className={`nav-item dropdown ${isGalleryActive ? 'active' : ''}`}>
                  <NavLink to={item.path} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {item.label}
                  </NavLink>
                  <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                    {item.subItems.map((subItem, subIndex) => (
                      <NavLink key={subIndex} to={subItem.path} className="dropdown-item">
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink to={item.path} className="nav-item nav-link" activeclassname="active">
                  {item.label}
                </NavLink>
              )}
            </React.Fragment>
          ))}
        </div>
        <NavLink to="/join" className="btn btn-primary rounded-pill px-3 d-none d-lg-block">Join Us<i className="fa fa-arrow-right ms-3"></i></NavLink>
      </div>
    </nav>
  );
};

export default Nav;
