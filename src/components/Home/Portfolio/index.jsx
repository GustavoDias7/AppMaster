import React from "react";
import Title from "components/common/Title";
import Subtitle from "components/common/Subtitle";
import FlexWrapper from "components/common/FlexWrapper";
import products from "mock/product";
import { Link } from "react-router-dom";
import useApp from "context/GlobalContext";
import styles from "./Portfolio.module.css";
import ImageZoom from "components/common/Modals/ImageZoom";

const ProductCard = ({ images, title, type, link, index }) => {
  const { setZoom, setIndexImage } = useApp();

  function handleClick() {
    setZoom(true);
    setIndexImage(index);
  }

  return (
    <figure className={styles.product}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={images[0]} alt={title} onClick={handleClick} />
        </div>
        <div className={styles.description}>
          <header>
            <h3>{title}</h3>
            <p>{type}</p>
          </header>
          <div className={styles.buttons}>
            <button onClick={handleClick} aria-label="Ativar zoom da imagem">
              <i className="fas fa-search-plus zoom-icon" />
            </button>
            <Link to={link} aria-label={"Link para o produto " + title}>
              <i className="fas fa-link" />
            </Link>
          </div>
        </div>
      </div>
    </figure>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <Title>Nosso portfólio</Title>
        <Subtitle>
          Confira o resultado do nosso trabalho, com alguns exemplos das nossas
          aplicações mais renomadas do mercado, que trouxeram resultados
          incríveis, impactando milhares de pessoas.
        </Subtitle>

        <FlexWrapper version="2">
          {products.map((product, index) => (
            <ProductCard {...product} key={product.title} index={index} />
          ))}
        </FlexWrapper>

        <ImageZoom />
      </div>
    </section>
  );
};

export default Portfolio;
