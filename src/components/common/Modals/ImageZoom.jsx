import useApp from "context/GlobalContext";
import products from "mock/product";
import React from "react";
import Slider from "react-slick";
import Modal from "./Modal";

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 350,
  cssEase: "linear",
};

const ImageZoom = () => {
  const { zoom, setZoom } = useApp();
  return (
    <Modal visibility={zoom} setVisibility={setZoom} className="image-zoom">
      <Slider {...settings}>
        {products.map((product) => {
          return (
            <div key={product.images[0]}>
              <div className="image-container">
                <img src={product.images[0]} alt="Zoom" />
              </div>
            </div>
          );
        })}
      </Slider>
    </Modal>
  );
};

export default ImageZoom;
