import React from "react";
import product7 from "assets/images/product-07.jpg";
import product8 from "assets/images/product-08.jpg";
import product9 from "assets/images/product-09.jpg";
import Title from "components/common/Title";

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

/* === PORTFOLIO === */
const productContent = [
  {
    title: "Earthquake",
    type: "Finanças",
    image: product7,
  },
  {
    title: "Ben Kolde",
    type: "Notícias",
    image: product8,
  },
  {
    title: "Easy Weather",
    type: "Previsão do tempo",
    image: product9,
  },
];

const ImageZoom = ({ productContent }) => {
  const { zoom, setZoom, indexImage, setIndexImage } =
    React.useContext(Context);

  function clickOverlay(e) {
    if (e.target === e.currentTarget) {
      setZoom(false);
    }
  }

  function nextImage() {
    setIndexImage(
      indexImage + 1 === productContent.length ? 0 : indexImage + 1
    );
  }

  function prevImage() {
    setIndexImage(
      indexImage - 1 === -1 ? productContent.length - 1 : indexImage - 1
    );
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
          src={productContent[indexImage].image}
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

const Product = ({ content, index }) => {
  const { setZoom, setIndexImage } = React.useContext(Context);
  const { image, title, type } = content;

  function handleClick() {
    setZoom(true);
    setIndexImage(index);
  }

  return (
    <figure className="product">
      <div className="product-content">
        <div className="product-image-container">
          <img
            className="product-image"
            src={image}
            alt={title}
            onClick={handleClick}
          />
        </div>
        <div className="product-description">
          <header className="product-header">
            <h3>{title}</h3>
            <p>{type}</p>
          </header>
          <div className="product-buttons">
            <button
              className="product-image-zoom"
              onClick={handleClick}
              aria-label="Ativar zoom da imagem"
            >
              <i className="fas fa-search-plus zoom-icon"></i>
            </button>
            <a
              href="/"
              className="product-page"
              aria-label={"Link para o produto " + title}
            >
              <i className="fas fa-link"></i>
            </a>
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
        <div className="main-container">
          <div className="section-header">
            <Title>Nosso portfólio</Title>
            <p>
              Confira o resultado do nosso trabalho, com alguns exemplos das
              nossas aplicações mais renomadas do mercado, que trouxeram
              resultados incríveis, impactando milhares de pessoas.
            </p>
          </div>

          <div className="product-container">
            {productContent.map((content, index) => (
              <Product content={content} key={content.title} index={index} />
            ))}
          </div>
          <ImageZoom productContent={productContent} />
        </div>
      </section>
    </PortContext>
  );
};

export default Portfolio;