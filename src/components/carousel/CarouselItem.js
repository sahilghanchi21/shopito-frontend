import React from "react";
import "../../pages/Home/Home.scss";
import { Link } from "react-router-dom";
import { shortenText } from "../../utils";
// import "./Carousel.scss";
const CarouselItem = ({ url, name, price, desc }) => {
  return (
    <div className="carouselItem">
      <Link to="/product-details" className="Page-Linc-container">
        <img src={url} alt="product" />
        <p className="price">{`$${price}`}</p>
        <h4>{shortenText(name, 18)}</h4>
        <p className="--mb">{shortenText(desc, 26)}</p>
      </Link>
      <button className="--btn --btn-block --btn-primary">Add To Cart</button>
    </div>
  );
};

export default CarouselItem;
