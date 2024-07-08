import React, { useEffect, useState } from 'react';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <a
            href="#"
            className={`btn btn-primary btn-lg back-to-top ${visible ? 'd-inline-flex' : 'd-none'}`}
            onClick={scrollToTop}
            style={{ width: '3rem', height: '3rem', borderRadius: '50%', position: 'fixed', bottom: '20px', right: '20px', alignItems: 'center', justifyContent: 'center' }}
        >
            <i className="bi bi-arrow-up"></i>
        </a>
    );
};

export default BackToTop;
