import React from "react";
import Title from "./Title";

const Cta = () => {
  return (
    <section id="cta">
      <div className="main-container">
        <Title>Fale conosco</Title>
        <div className="cta-content">
          <p>
            Temos o prazer de te convidar para um papo descompromissado, no
            intuito de entender suas ideias e torná-las reais.
          </p>
          <a href="/" className="main-button cta-button">
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
