import React, { useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Masonry from 'react-masonry-css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS for animations
import './videoGallery.css';

const videos = [
  {
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Video 1',
    description: 'This is a description of Video 1'
  },
  {
    src: 'https://www.youtube.com/embed/mgM6rLpBkkY',
    title: 'Video 2',
    description: 'This is a description of Video 2'
  },
  {
    src: 'https://www.youtube.com/embed/2ZIpFytCSVc',
    title: 'Video 3',
    description: 'This is a description of Video 3'
  }
  // Add more videos as needed
];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};

const VideoGallery = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <Breadcrumb pageName="Video Gallery" />
      <div className="container-xxl bg-light p-0">
        {/* Video Gallery Start */}
        <section className="container-xxl py-5">
          <div className="container">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {videos.map((video, index) => (
                <div className="video-item" key={index} data-aos="fade-up">
                  <iframe
                    width="100%"
                    height="200"
                    src={video.src}
                    title={video.title}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                  <div className="video-info">
                    <p className="video-title">{video.title}</p>
                    <p className="video-description">{video.description}</p>
                  </div>
                </div>
              ))}
            </Masonry>
          </div>
        </section>
        {/* Video Gallery End */}
      </div>
    </>
  );
};

export default VideoGallery;
