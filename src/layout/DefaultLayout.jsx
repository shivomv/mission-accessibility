// src/layouts/DefaultLayout.jsx
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from '../components/Nav';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';
import Page404 from '../Pages/Error/Page404';

const Home = React.lazy(() => import('../Pages/Home/Home'));
const About = React.lazy(() => import('../Pages/About/About'));
const ImageGallery = React.lazy(() => import('../Pages/Gallery/ImageGallery'));
const VideoGallery = React.lazy(() => import('../Pages/Gallery/VideoGallery'));
const Contact = React.lazy(() => import('../Pages/Contact/Contact'));

const Spinner = () => (
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

const DefaultLayout = () => {
    return (
        <>
            <Nav />
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/image-gallery" element={<ImageGallery />} />
                    <Route path="/video-gallery" element={<VideoGallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Suspense>
            <BackToTop />
            <Footer />
        </>
    );
};

export default DefaultLayout;
