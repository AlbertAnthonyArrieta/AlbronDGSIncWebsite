import React from "react";
import img1 from "../images/p1.jpg";
import img2 from "../images/albroncollage1.jpg";
import img3 from "../images/p2.jpg";
import Carousel from 'react-bootstrap/Carousel';
function LandingSection() {
  return (
    <div>
      <Carousel>
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
  );
}

export default LandingSection;
