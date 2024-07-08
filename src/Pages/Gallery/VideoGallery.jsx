import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

const VideoGallery = () => {
    return (
        <>
            <Breadcrumb pageName="Video Gallery" />
            <div className="container-xxl bg-light p-0">
               
                {/* Video Gallery Start */}
                <section className="container-xxl py-5">
                    <div className="container">
                        <h2 className="display-4 mb-4">Video Gallery</h2>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <iframe width="100%" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video 1" frameborder="0" allowfullscreen></iframe>
                            </div>
                            <div className="col-md-4 mb-4">
                                <iframe width="100%" height="200" src="https://www.youtube.com/embed/mgM6rLpBkkY" title="Video 2" frameborder="0" allowfullscreen></iframe>
                            </div>
                            <div className="col-md-4 mb-4">
                                <iframe width="100%" height="200" src="https://www.youtube.com/embed/2ZIpFytCSVc" title="Video 3" frameborder="0" allowfullscreen></iframe>
                            </div>
                            {/* Add more videos as needed */}
                        </div>
                    </div>
                </section>
                {/* Video Gallery End */}
            </div>
        </>
    );
}

export default VideoGallery;
