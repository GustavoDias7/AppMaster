import React from "react";
import Slider from "react-slick";
import styles from "./ProductImage.module.css";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
};

const ProductImage = ({ images, id, title }) => {
  return (
    <Slider {...settings}>
      {images.map((image) => {
        return (
          <div className={styles.imageContainer} key={id}>
            <img src={image} alt={title} />
          </div>
        );
      })}
    </Slider>
  );
};

export default ProductImage;
