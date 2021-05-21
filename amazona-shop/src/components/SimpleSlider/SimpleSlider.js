import React from "react";
import Slider from "react-slick";
// import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";
import { Link } from "react-router-dom";

export default function SimpleSlider({ data }) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <h2> React-Slick</h2>
      <Slider {...settings}>
        {data.map((prod) => (
          <Link to={`product/${prod._id}`} key={prod._id}>
            <div>
              <img src={prod.image} alt={prod.name} className="img"></img>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
