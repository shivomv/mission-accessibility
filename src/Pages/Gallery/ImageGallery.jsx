import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

const ImageGallery = () => {
    return (
        <>
            <Breadcrumb pageName="Image Gallery" />
            <div className="container-xxl bg-light p-0">
                {/* Image Gallery Start */}
                <section className="container-xxl py-5">
                    <div className="container">
                        <h2 className="display-4 mb-4">Image Gallery</h2>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <img src="https://via.placeholder.com/400x300.png?text=Image+1" className="img-fluid rounded shadow-sm" alt="Image 1" />
                            </div>
                            <div className="col-md-4 mb-4">
                                <img src="https://via.placeholder.com/400x300.png?text=Image+2" className="img-fluid rounded shadow-sm" alt="Image 2" />
                            </div>
                            <div className="col-md-4 mb-4">
                                <img src="https://via.placeholder.com/400x300.png?text=Image+4" className="img-fluid rounded shadow-sm" alt="Image 3" />
                            </div>
                            {/* Add more images as needed */}
                        </div>
                    </div>
                </section>
                {/* Image Gallery End */}

               
            </div>
        </>
    );
}

export default ImageGallery;
