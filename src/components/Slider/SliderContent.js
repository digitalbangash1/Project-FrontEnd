import React from "react";


function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section className="section1">
      {sliderImage.map((slide, index) => (
        <div 
          key={index}
          className={index === activeIndex ? "slidesactive" : "inactive"} >
          <img className="slide-image" src={slide.urls} alt="" />
          <h3 className="slide-text">{slide.description}</h3>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;