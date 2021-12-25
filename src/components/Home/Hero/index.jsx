import React from "react";
import Title from "components/common/Title";
import scrollToTitle from "helper/scrollToTitle";
import Button from "components/common/Buttons/Button";

const Hero = () => (
  <section id="hero">
    <div className="main-container">
      <div id="hero-content">
        <Title>Transforme sua ideia em um app!</Title>
        <div className="hero-buttons">
          <Button onClick={(event) => scrollToTitle(event, "about")}>
            Sobre nós
          </Button>
          <Button onClick={(event) => scrollToTitle(event, "portfolio")}>
            Projetos
          </Button>
        </div>
      </div>
    </div>
    <div className="white-overlay"></div>
  </section>
);

export default Hero;
