import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
// import styles from "./Slider.module.scss";
import "./Slider.scss";
import { useNavigate } from "react-router-dom";
const Slider = ({ sliderData }) => {
  const [currentSlide, setCurruntSlide] = useState(0);
  const sliderLength = sliderData.length;
  const autoScroll = true;
  let slideIntervel;
  const intervelTime = 5000;
  const nextSlide = () => {
    setCurruntSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurruntSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1);
  };
  const navigate = useNavigate();
  useEffect(() => {
    setCurruntSlide(0);
  }, []);
  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideIntervel = setInterval(nextSlide, intervelTime);
      };
      auto();
    }
    return () => clearInterval(slideIntervel);
  }, [currentSlide, intervelTime, autoScroll]);
  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData?.map((slide, index) => {
        const { heading, desc, image } = slide;
        return (
          <div
            key={index}
            className={index === currentSlide ? "slide current" : "slide"}
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="slide" />
                <div className="content">
                  <span className="span1"></span>
                  <span className="span2"></span>
                  <span className="span3"></span>
                  <span className="span4"></span>
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <button
                    className="--btn --btn-primary"
                    onClick={() => navigate("/shop")}
                  >
                    Shop Now
                  </button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
