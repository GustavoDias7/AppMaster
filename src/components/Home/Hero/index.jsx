import React from "react";
import Title from "components/common/Title";
import scrollToTitle from "helper/scrollToTitle";

const Hero = () => (
  <section id="hero">
    <div className="main-container">
      <div id="hero-content">
        <Title>Transforme sua ideia em um app!</Title>
        <div className="hero-buttons">
          <a
            href="/"
            className="main-button"
            onClick={(event) => scrollToTitle(event, "about")}
          >
            Sobre nós
          </a>

          <a
            href="/"
            className="main-button"
            onClick={(event) => scrollToTitle(event, "portfolio")}
          >
            Projetos
          </a>
        </div>
      </div>
    </div>
    <div className="white-overlay"></div>
  </section>
);

export default Hero;
