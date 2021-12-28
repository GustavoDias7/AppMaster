import React from "react";
import AboutImg from "assets/images/aboult-image.jpg";
import Title from "components/common/Title";
import FlexWrapper from "components/common/FlexWrapper";
import styles from "./About.module.css";

/* === ABOUT === */
const aboutTopics = [
  "Estamos há mais de 2 anos no mercado de tecnologia, que conta com 1 escritórios espalhados pelo Rio de Janeiro.",
  "Trabalhamos com as tecnologias mais modernas do mercado, para atender às diversas necessidades dos clientes.",
  "Tivemos vários desafios que nos fizeram crescer e nos desenvolver como profissionais da área de fabricação de software.",
];

const About = () => {
  return (
    <section>
      <div className="container">
        <FlexWrapper>
          <div className={styles.left}>
            <img src={AboutImg} alt="Sobre" />
          </div>
          <div className={styles.right}>
            <header>
              <Title>Conheça um pouco mais sobre a AppMaster</Title>
              <p>
                Somos uma startup fabricante de aplicativos para android e IOS.
              </p>
            </header>
            <ul>
              {aboutTopics.map((topic, index) => {
                return (
                  <li key={index}>
                    <i className="far fa-check-circle" />
                    <p>{topic}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </FlexWrapper>
      </div>
    </section>
  );
};

export default About;
