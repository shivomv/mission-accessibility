import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminNav from '../adminComponent/AdminNav';
import PrivateRoute from '../../Security/PrivateRoute';
import './AdminLayout.css'; // Import the CSS file for layout styling
import SideNav from '../adminComponent/SideNav';

// Lazy loading import for all components
const AdminDashboard = React.lazy(() => import('./../AdminPages/AdminDashboard'));
const ManageHome = React.lazy(() => import('../AdminPages/ManagePages/ManageHome')); // Adjusted path
const ManageAbout = React.lazy(() => import('../AdminPages/ManagePages/ManageAbout')); // Adjusted path
const ManageServices = React.lazy(() => import('../AdminPages/ManagePages/ManageServices')); // Adjusted path
const ManageContact = React.lazy(() => import('../AdminPages/ManagePages/ManageContact')); // Adjusted path

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
            <div className="content-container" style={{height:'100vh', overflowY:'scroll'}}>
                <AdminNav />
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} element={AdminDashboard} />} />
                        <Route path="/manage/Home" element={<PrivateRoute isAuthenticated={isAuthenticated} element={ManageHome} />} />
                        <Route path="/manage/about" element={<PrivateRoute isAuthenticated={isAuthenticated} element={ManageAbout} />} />
                        <Route path="/manage/services" element={<PrivateRoute isAuthenticated={isAuthenticated} element={ManageServices} />} />
                        <Route path="/manage/contact" element={<PrivateRoute isAuthenticated={isAuthenticated} element={ManageContact} />} />
                        {/* Add more admin routes here */}
                        {/* <Route path="/admin/settings" element={<PrivateRoute isAuthenticated={isAuthenticated} element={AdminSettings} />} /> */}
                        {/* <Route path="*" element={<Page404 />} /> */}
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
};

export default AdminLayout;
