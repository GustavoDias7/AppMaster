import React from "react";

const Hero = () => (
  <section id="hero">
    <div className="main-container">
      <div id="hero-content">
        <h2>Transforme sua ideia em um app!</h2>
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
