import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './ServiceCards.css';
import { boutiqueImages, cropAIImages, travelExploreImages } from './utils/importImages';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SelectedWorks = () => {
  const renderImages = (images) => {
    return Object.keys(images).map((key, index) => (
      <div key={index} className="work-image-container">
        <img src={images[key]} alt={key} className="work-image" />
      </div>
    ));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    beforeChange: (current, next) => handleScroll(current, next),
  };

  const handleScroll = (current, next) => {
    // const images = document.querySelectorAll('.work-image');
    // const currentImage = images[current];
    // const nextImage = images[next];

    // if (currentImage && currentImage.naturalHeight > 550) {
    //   currentImage.style.transform = 'translateY(-100%)';
    // } else if (currentImage) {
    //   currentImage.style.transform = 'translateY(0)';
    // }

    // if (nextImage && nextImage.naturalHeight > 550) {
    //   nextImage.style.transform = 'translateY(0)';
    // } else if (nextImage) {
    //   nextImage.style.transform = 'translateY(0)';
    // }
  };

  useEffect(() => {
    const images = document.querySelectorAll('.work-image');
    images.forEach((image, index) => {
      if (index !== 0 && image.naturalHeight > 550) {
        image.style.transform = 'translateY(0)';
      } else if (index !== 0) {
        image.style.transform = 'translateY(0)';
      }
    });
  }, []);

  return (
    <section className="selected-works">
      <div className="container">
        <h2>Selected Works</h2>
        <p>Take a look at some of my projects I have done.</p>
        <div className="service-cards">
          <div className="service-card">
            <h3>Boutique Website Design</h3>
            <Slider {...settings}>
              {renderImages(boutiqueImages)}
            </Slider>
            <ul>
              <li>Figma Wiredframes with Code</li>
              <li>Mobile and Website Screens</li>
              <li>Backend Admin Dashboard</li>
              <li>Cloud Deployment(AWS)</li>
            </ul>
            {/* <a href="#learn-more">Know More →</a> */}
          </div>
          <div className="service-card">
            <h3>Crop AI Development</h3>
            <Slider {...settings}>
              {renderImages(cropAIImages)}
            </Slider>
            <ul>
              <li>Responsive design</li>
              <li>Custom branding</li>
              <li>SEO optimized</li>
              <li>Scalable architecture</li>
            </ul>
            {/* <a href="#learn-more">Know More →</a> */}
          </div>
          <div className="service-card">
            <h3>Travel Explore Platform</h3>
            <Slider {...settings}>
              {renderImages(travelExploreImages)}
            </Slider>
            <ul>
              <li>UI/UX finalization with customer feedback and enhancements</li>
              <li>User-friendly interface and Responsive design</li>
              <li>Booking and reservation system</li>
              <li>Personalized recommendations</li>
            </ul>
            {/* <a href="#learn-more">Know More →</a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedWorks;