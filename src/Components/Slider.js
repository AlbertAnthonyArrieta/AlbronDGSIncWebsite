import React from "react";
import ImageSlider from "react-image-comparison-slider";
import img1 from "../images/logo.png";
import img2 from "../images/ALBRON LOGO1.jpg";
function Slider() {
  return (
    <div id="sliderContainer">
      <ImageSlider
        image1={img1}
        image2={img2}
        sliderWidth={3}
        sliderColor="orange"
        handleColor="orange"
        handleBackgroundColor="white"
        onSlide={() => {
          console.log("sliding");
        }}
      />
    </div>
  );
}

export default Slider;
