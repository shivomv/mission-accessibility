import React, { useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Masonry from 'react-masonry-css';
import AOS from 'aos';
import './imageGallery.css'; // Create this CSS file for custom styles

const images = [
  {
    src: 'img/imgabout1.jpeg',
    alt: 'Boat on Calm Water',
    date: '2023-07-01',
    description: 'This is a description of image 1'
  },
  {
    src: 'img/imgabout2.jpeg',
    alt: 'Wintry Mountain Landscape',
    date: '2023-07-02',
    description: 'This is a description of image 2'
  },
  {
    src: 'img/imgabout3.jpeg',
    alt: 'Mountains in the Clouds',
    date: '2023-07-03',
    description: 'This is a description of image 3'
  },
  {
    src: 'img/Group1.jpeg',
    alt: 'Boat on Calm Water',
    date: '2023-07-04',
    description: 'This is a description of image 4'
  },
  {
    src: 'img/Group2.jpeg',
    alt: 'Waves at Sea',
    date: '2023-07-05',
    description: 'This is a description of image 5'
  },
  {
    src: 'img/Group3.jpeg',
    alt: 'Yosemite National Park',
    date: '2023-07-06',
    description: 'This is a description of image 6'
  },
//   {
//       src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp',
//       alt: 'Yosemite National Park',
//     date: '2023-07-06',
//     description: 'This is a description of image 6'
//   },
//   {
//     src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp',
//     alt: 'Yosemite National Park',
//     date: '2023-07-06',
//     description: 'This is a description of image 6'
// },
// {
//   src: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp',
//   alt: 'Waves at Sea',
//   // date: '2023-07-05',
//   // description: 'This is a description of image 5'
// },
// {
//   src: 'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp',
//   alt: 'Yosemite National Park',
//   // date: '2023-07-06',
//   // description: 'This is a description of image 6'
// },
  // Add more images as needed
];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};

const ImageGallery = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <>
      <Breadcrumb pageName="Image Gallery" />
      <div className="container-xxl bg-light p-0">
        {/* Image Gallery Start */}
        <section className="container-xxl py-5">
          <div className="container">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {images.map((image, index) => (
                <div className="image-item" key={index} data-aos="fade-up">
                  <img
                    src={image.src}
                    className="img-fluid rounded shadow-sm"
                    alt={image.alt}
                  />
                  {/* <div className="image-info">
                    <p className="image-date">{image.date}</p>
                    <p className="image-description">{image.description}</p>
                  </div> */}
                </div>
              ))}
            </Masonry>
          </div>
        </section>
        {/* Image Gallery End */}
      </div>
    </>
  );
};

export default ImageGallery;
