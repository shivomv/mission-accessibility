// src/components/SideNav.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { FaTachometerAlt, FaCogs, FaBars, FaFileAlt } from 'react-icons/fa';
import './SideNav.css';

const SideNav = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const navigate = useNavigate();

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleMobile = () => {
        setIsMobileOpen(!isMobileOpen);
    };

    const handleBrandClick = () => {
        navigate('/admin');
    };

    return (
        <>
            <div className={`d-flex sidenav flex-column ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}`} id="sidebar-wrapper">
                <Navbar  className="d-flex flex-column p-0">
                    <Navbar.Brand onClick={handleBrandClick} className="cursor-pointer d-flex align-items-center justify-content-between p-3">
                        <span>{!isCollapsed && 'Admin Panel'}</span>
                        <FaBars onClick={toggleCollapse} />
                    </Navbar.Brand>
                    <Nav className="flex-column">
                        <Nav.Link as={Link} to="/admin" className="d-flex align-items-center p-3">
                            <FaTachometerAlt className="me-2" />
                            {!isCollapsed && <span>Dashboard</span>}
                        </Nav.Link>

                        <Nav.Link as={Link} to="/admin/manage-pages" className="d-flex align-items-center p-3">
                            <FaFileAlt className="me-2" />
                            {!isCollapsed && <span>Manage Pages</span>}
                        </Nav.Link>

                        {/* Add more links as needed */}
                        <Nav.Link as={Link} to="/admin/settings" className="d-flex align-items-center p-3">
                            <FaCogs className="me-2" />
                            {!isCollapsed && <span>Settings</span>}
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </div>
            <div className="mobile-toggle" onClick={toggleMobile}>
                <FaBars />
            </div>
        </>
    );
};

export default SideNav;
