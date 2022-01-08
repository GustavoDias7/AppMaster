import React from "react";
import Title from "components/common/Title";
import Button from "components/common/Buttons/Button";
import styles from "./Hero.module.css";
import scrollToElement from "utils/scrollToElement";

const Hero = () => (
  <main className={styles.hero} id="hero">
    <div className="container">
      <div className={styles.content}>
        <Title>Transforme sua ideia em um app!</Title>
        <div>
          <Button onClick={(e) => scrollToElement(e, "#about")}>
            Sobre nós
          </Button>
          <Button onClick={(e) => scrollToElement(e, "#portfolio")}>
            Projetos
          </Button>
        </div>
      </div>
    </div>
    <div className={styles.whiteOverlay} />
  </main>
);

export default Hero;
