// src/layouts/AdminLayout.jsx
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminNav from '../adminComponent/AdminNav';
import PrivateRoute from '../../Security/PrivateRoute';
import './AdminLayout.css'; // Import the CSS file for layout styling
import SideNav from '../adminComponent/SideNav';

// Lazy loading import for all components
const AdminDashboard = React.lazy(() => import('./../AdminPages/AdminDashboard'));
const ManagePages = React.lazy(() => import('../AdminPages/ManagePages/ManagePages'));
const NavManagement = React.lazy(() => import('../AdminPages/ManagePages/ManageComponents/NavManagement'));
// const AdminSettings = React.lazy(() => import('../Pages/Admin/Settings'));
// Add more admin routes as needed

const Spinner = () => (
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

const AdminLayout = ({ isAuthenticated }) => {
    return (
        <div className="d-flex bg-white">
            <SideNav />
            <div className="content-container">
                <AdminNav />
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} element={AdminDashboard} />} />
                        <Route path="/manage-pages" element={<PrivateRoute isAuthenticated={isAuthenticated} element={ManagePages} />} />
                        <Route path="/manage-nav" element={<PrivateRoute isAuthenticated={isAuthenticated} element={NavManagement} />} />
                        {/* <Route path="/admin/settings" element={<PrivateRoute isAuthenticated={isAuthenticated} element={AdminSettings} />} /> */}
                        {/* Add more admin routes here */}
                        {/* <Route path="*" element={<Page404 />} /> */}
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
};

export default AdminLayout;
