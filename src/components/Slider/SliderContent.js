import React from "react";
import "./slider.css";
import { Link } from "react-router-dom";




function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section className="section1" >
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slidesactive" : "inactive"} >
          <Link to="/courses" onClick={() => alert("You will be directed to coursepage now")}><img className="slide-image" src={slide.urls} alt="" />
          </Link>
          <h3 className="slide-text" >{slide.description}</h3>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;