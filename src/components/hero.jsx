import React from "react";
import Title from "./Title";

const Hero = () => (
  <section id="hero">
    <div className="main-container">
      <div id="hero-content">
        <Title>Transforme sua ideia em um app!</Title>
        <div className="hero-buttons">
          <a href="#about" className="main-button">
            Sobre nós
          </a>
          <a href="#portfolio" className="main-button">
            Projetos
          </a>
        </div>
      </div>
    </div>
    <div className="white-overlay"></div>
  </section>
);

export default Hero;
