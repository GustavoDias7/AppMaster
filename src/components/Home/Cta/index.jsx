import React from "react";
import Title from "components/common/Title";
import Button from "components/common/Buttons/Button";

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
          <Button id="fcButton">Saiba Mais</Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
