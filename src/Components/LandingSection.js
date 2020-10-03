import React from "react";
import img1 from "../images/p1.jpg";
import img2 from "../images/albroncollage1.jpg";
import img3 from "../images/p2.jpg";
import Carousel from "react-bootstrap/Carousel";
function LandingSection() {
  return (
    <div id="landingSection" className="text-center">
     
        

      <div id="landingText-container">
        <div id="title-wrapper">
          <h1 className="text-white" id="title-text"><strong><span className="text-orange">ENGINEERING</span> DESIGN & DRAFTING</strong></h1>
          <button className="orange-btn btn shadow text-orange">CONTACT</button>
        </div>
      </div>

      <div id="carousel-container">
        <Carousel
          controls={false}
          indicators={false}
          touch={false}
          interval={5000}
          id="carousel"
        >
          <Carousel.Item>
            <img
              className="d-block w-100 slideItem"
              src={img1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slideItem"
              src={img2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slideItem"
              src={img3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default LandingSection;
