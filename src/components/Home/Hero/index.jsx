import React from "react";
import Title from "components/common/Title";
import scrollToTitle from "utils/scrollToTitle";
import Button from "components/common/Buttons/Button";

const Hero = () => (
  <main id="hero">
    <div className="container">
      <div className="content">
        <Title>Transforme sua ideia em um app!</Title>
        <div>
          <Button onClick={(event) => scrollToTitle(event, "about")}>
            Sobre nós
          </Button>
          <Button onClick={(event) => scrollToTitle(event, "portfolio")}>
            Projetos
          </Button>
        </div>
      </div>
    </div>
    <div className="white-overlay" />
  </main>
);

export default Hero;
