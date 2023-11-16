import React from "react";
import Slider from "../../components/Slider/Slider";
import { sliderData } from "../../components/Slider/slider-data";
import HomeInfo from "./HomeInfo";
import { productData } from "../../components/carousel/data";
import CarouselItem from "../../components/carousel/CarouselItem";
import ProductCarousel from "../../components/carousel/Carousel";
import ProductCategory from "../../components/ProductCategory/ProductCategory";
import FooterLinks from "../../components/Footer/FooterLinks";

const PageHeading = ({ heading, btnText }) => {
  return (
    <>
      <div className="--flex-between">
        <h2 className="--fw-thin">{heading}</h2>
        <button className="--btn">{btnText}</button>
      </div>
      <div className="--hr"></div>
    </>
  );
};
const Home = () => {
  const products = productData.map((item, index) => {
    return (
      <>
        <div key={item.id}>
          <CarouselItem
            name={item.name}
            url={item.imageurl}
            price={item.price}
            desc={item.description}
          />
        </div>
      </>
    );
  });
  return (
    <>
      <Slider sliderData={sliderData} />
      <section>
        <div className="container">
          <HomeInfo />
          <PageHeading heading={"Latest Product"} btnText={"Shop Now >>>"} />
          <ProductCarousel product={products} />
        </div>
      </section>
      <section className="--bg-gray">
        <div className="container">
          <ProductCategory />
        </div>
      </section>
      <section>
        <div className="container">
          <PageHeading heading={"Mobile Phones"} btnText={"Shop Now >>>"} />
          <ProductCarousel product={products} />
        </div>
      </section>
      <FooterLinks />
    </>
  );
};

export default Home;
