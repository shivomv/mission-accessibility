// src/layouts/AdminLayout.jsx
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminNav from '../adminComponent/AdminNav';
import PrivateRoute from '../../Security/PrivateRoute';
// import Page404 from '../../Pages/Error/Page404';

// Lazy loading import for all components
const AdminDashboard = React.lazy(() => import('./../AdminPages/AdminDashboard'));
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
        <>
            <AdminNav />
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} element={AdminDashboard} />} />
                    {/* <Route path="/admin/settings" element={<PrivateRoute isAuthenticated={isAuthenticated} element={AdminSettings} />} /> */}
                    {/* Add more admin routes here */}
                    {/* <Route path="*" element={<Page404 />} /> */}
                </Routes>
            </Suspense>
           
        </>
    );
};

export default AdminLayout;
