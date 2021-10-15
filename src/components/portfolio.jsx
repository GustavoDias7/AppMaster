import React from "react";

/* === PORTFOLIO === */
const productContent = [
  {
    image: "./img/image-01.png",
    title: "Finished Task",
    type: "Website",
    link: "#",
  },
  {
    image: "./img/image-02.png",
    title: "Cutter Pro",
    type: "Desktop",
    link: "#",
  },
  {
    image: "./img/image-03.png",
    title: "Slide Pointer",
    type: "Desktop",
    link: "#",
  },
  {
    image: "./img/image-04.png",
    title: "Buscadores",
    type: "Website",
    link: "#",
  },
  {
    image: "./img/image-05.png",
    title: "VanArsdel",
    type: "Website",
    link: "#",
  },
  {
    image: "./img/image-06.jpg",
    title: "Android Here",
    type: "Website",
    link: "#",
  },
  {
    image: "./img/image-07.jpg",
    title: "Earthquake",
    type: "App",
    link: "#",
  },
  {
    image: "./img/image-08.jpg",
    title: "Ben Kolde",
    type: "Website",
    link: "#",
  },
  {
    image: "./img/image-09.jpg",
    title: "Easy Weather",
    type: "App",
    link: "#",
  },
];

const Product = ({ content }) => {
  const { image, title, type, link } = content;
  return (
    <figure className="product">
      <div className="product-content">
        <div className="product-image-container">
          <img className="product-image" src={image} alt={title} />
        </div>
        <div className="product-description">
          <header className="product-header">
            <h3>{title}</h3>
            <p>{type}</p>
          </header>
          <div className="product-buttons">
            <button className="product-image-zoom">
              <i className="fas fa-search-plus zoom-icon"></i>
            </button>
            <a href={link} className="product-page">
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
          {productContent.map((content) => (
            <Product content={content} key={content.title} />
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
      </div>
    </section>
  );
};

export default Portfolio;
