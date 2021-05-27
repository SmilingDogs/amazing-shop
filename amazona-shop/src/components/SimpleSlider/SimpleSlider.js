import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.css";
import { Link } from "react-router-dom";


export default function SimpleSlider() {

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
  const [loading, setLoading] = useState(false);
  const [sliderData, setSliderData] = useState([])

  useEffect(() => {
    setLoading(true)
    axios("slider.json").then(({data}) => setSliderData(data))
    setLoading(false)
  }, [])

  if (loading) return <h2>Loading slider data...</h2>

  return (
    <div className="slider-container">
      <h2> React-Slick</h2>
      <Slider {...settings}>
        {sliderData.map((slide) => (
          <Link to={`products/sale/${slide.name}`} key={slide._id}>
            <div>
              <img src={slide.image} alt={slide.name} className="img"></img>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
