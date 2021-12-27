import React from "react";
import Title from "components/common/Title";
import Subtitle from "components/common/Subtitle";
import FlexWrapper from "components/common/FlexWrapper";
import products from "mock/product";
import { Link } from "react-router-dom";
import useApp from "context/GlobalContext";

const Context = React.createContext();
const PortContext = ({ children }) => {
  const [zoom, setZoom] = React.useState(false);
  const [indexImage, setIndexImage] = React.useState(0);

  return (
    <Context.Provider value={{ zoom, setZoom, indexImage, setIndexImage }}>
      {children}
    </Context.Provider>
  );
};

const ImageZoom = ({ products }) => {
  const { zoom, setZoom, indexImage, setIndexImage } = useApp();

  function clickOverlay(e) {
    if (e.target === e.currentTarget) setZoom(false);
  }

  function nextImage() {
    setIndexImage(indexImage + 1 === products.length ? 0 : indexImage + 1);
  }

  function prevImage() {
    setIndexImage(indexImage - 1 === -1 ? products.length - 1 : indexImage - 1);
  }

  return (
    <div
      className={`image-zoom${zoom ? " active" : ""}`}
      onClick={clickOverlay}
    >
      <div className="image-zoom-content">
        <button className="close-zoom" onClick={() => setZoom(false)}>
          X
        </button>
        <img
          className="zoom-image"
          src={products[indexImage].images[0]}
          alt="Zoom"
        />
        <button
          className="prev-arrow"
          onClick={prevImage}
          aria-label="Imagem anterior"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <button
          className="next-arrow"
          onClick={nextImage}
          aria-label="Próxima imagem"
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

const Product = ({ images, title, type, link, index }) => {
  const { setZoom, setIndexImage } = useApp();

  function handleClick() {
    setZoom(true);
    setIndexImage(index);
  }

  return (
    <figure className="product">
      <div className="content">
        <div className="image-container">
          <img src={images[0]} alt={title} onClick={handleClick} />
        </div>
        <div className="description">
          <header>
            <h3>{title}</h3>
            <p>{type}</p>
          </header>
          <div className="buttons">
            <button onClick={handleClick} aria-label="Ativar zoom da imagem">
              <i className="fas fa-search-plus zoom-icon"></i>
            </button>
            <Link to={link} aria-label={"Link para o produto " + title}>
              <i className="fas fa-link"></i>
            </Link>
          </div>
        </div>
      </div>
    </figure>
  );
};

const Portfolio = () => {
  return (
    <PortContext>
      <section id="portfolio">
        <div className="container">
          <Title>Nosso portfólio</Title>
          <Subtitle>
            Confira o resultado do nosso trabalho, com alguns exemplos das
            nossas aplicações mais renomadas do mercado, que trouxeram
            resultados incríveis, impactando milhares de pessoas.
          </Subtitle>

          <FlexWrapper version="2">
            {products.map((product, index) => (
              <Product {...product} key={product.title} index={index} />
            ))}
          </FlexWrapper>

          <ImageZoom products={products} />
        </div>
      </section>
    </PortContext>
  );
};

export default Portfolio;
