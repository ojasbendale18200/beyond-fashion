import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  return (
    <div className="slider">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img
            loading="lazy"
            src="https://cdn.anscommerce.com/catalog/Columbia/banner/580-2023_01_03-columbia_womenswebbannernew_1323.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://cdn.anscommerce.com/catalog/Columbia/banner/580-2023_01_03-columbia_warmthwebbannernew_1323.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://cdn.anscommerce.com/catalog/Columbia/banner/580-2023_01_03-columbia_footwearwebbannernew_1323.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            loading="lazy"
            src="https://cdn.anscommerce.com/catalog/Columbia/banner/581-2022_10_20-peakfreak.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
