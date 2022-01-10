import React from "react";
import Title from "components/common/Title";
import Button from "components/common/Buttons/Button";
import scrollToElement from "utils/scrollToElement";
import Subtitle from "components/common/Subtitle";
import styles from "./Cta.module.css";

const Cta = () => {
  return (
    <section className={styles.cta} id="cta">
      <div className="container">
        <Title>Fale conosco</Title>
        <Subtitle>
          Temos o prazer de te convidar para um papo descompromissado, no
          intuito de entender suas ideias e torná-las reais.
        </Subtitle>
        <Button
          id="fcButton"
          onClick={(e) => scrollToElement(e, "#contact-us")}
        >
          Saiba Mais
        </Button>
      </div>
    </section>
  );
};

export default Cta;
