import React from "react";
import product1 from "../Assets/Images/product-01.png";
import product2 from "../Assets/Images/product-02.png";
import product3 from "../Assets/Images/product-03.png";
import product4 from "../Assets/Images/product-04.png";
import product5 from "../Assets/Images/product-05.png";
import product6 from "../Assets/Images/product-06.jpg";
import product7 from "../Assets/Images/product-07.jpg";
import product8 from "../Assets/Images/product-08.jpg";
import product9 from "../Assets/Images/product-09.jpg";

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
    title: "Finished Task",
    type: "Website",
    image: product1,
  },
  {
    title: "Cutter Pro",
    type: "Desktop",
    image: product2,
  },
  {
    title: "Slide Pointer",
    type: "Desktop",
    image: product3,
  },
  {
    title: "Buscadores",
    type: "Website",
    image: product4,
  },
  {
    title: "VanArsdel",
    type: "Website",
    image: product5,
  },
  {
    title: "Android Here",
    type: "Website",
    image: product6,
  },
  {
    title: "Earthquake",
    type: "App",
    image: product7,
  },
  {
    title: "Ben Kolde",
    type: "Website",
    image: product8,
  },
  {
    title: "Easy Weather",
    type: "App",
    image: product9,
  },
];

const ImageZoom = ({ productContent }) => {
  const { zoom, setZoom, indexImage, setIndexImage } =
    React.useContext(Context);

  function clickOverlay({ target, currentTarget }) {
    if (target === currentTarget) {
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
        <button className="prev-arrow" onClick={prevImage}>
          <i class="fas fa-arrow-left"></i>
        </button>
        <button className="next-arrow" onClick={nextImage}>
          <i class="fas fa-arrow-right"></i>
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
            <button className="product-image-zoom" onClick={handleClick}>
              <i className="fas fa-search-plus zoom-icon"></i>
            </button>
            <a href="/" className="product-page">
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
            <h2>Nosso portfólio</h2>
            <p>
              Confira o resultado do nosso trabalho, com alguns exemplos das
              nossas aplicações mais renomadas do mercado, que trouxeram
              resultados incríveis, impactando milhões de pessoas pelo Brasil e
              pelo mundo.
            </p>
          </div>

          <div className="product-container">
            {productContent.map((content, index) => (
              <Product content={content} key={content.title} index={index} />
            ))}
          </div>

          <div className="image-zoom">
            <div className="image-zoom-content">
              <img className="zoom-image" src="" alt="Imagem do zoom" />
            </div>
            <div className="zoom-buttons">
              <button className="previous-image">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="next-image">
                <i className="fas fa-chevron-right"></i>
              </button>
              <button className="close-zoom">X</button>
            </div>
          </div>
          <ImageZoom productContent={productContent} />
        </div>
      </section>
    </PortContext>
  );
};

export default Portfolio;
