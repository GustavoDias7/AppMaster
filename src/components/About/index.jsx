import React from "react";
import AboutImg from "../../assets/images/aboult-image.jpg";
import Title from "../Title";

/* === ABOUT === */
const aboutTopics = [
  "Estamos há mais de 2 anos no mercado de tecnologia, que conta com 1 escritórios espalhados pelo Rio de Janeiro.",
  "Trabalhamos com as tecnologias mais modernas do mercado, para atender às diversas necessidades dos clientes.",
  "Tivemos vários desafios que nos fizeram crescer e nos desenvolver como profissionais da área de fabricação de software.",
];

const About = () => {
  return (
    <section id="about">
      <div className="main-container">
        <div id="about-content">
          <div id="about-image">
            <img src={AboutImg} alt="Sobre" />
          </div>
          <div id="about-text">
            <div id="about-text-header">
              <Title>Conheça um pouco mais sobre a AppMaster</Title>
              <p>
                Somos uma startup fabricante de aplicativos para android e IOS.
              </p>
            </div>
            <ul id="about-list-header">
              {aboutTopics.map((topic, index) => {
                return (
                  <li key={index}>
                    <i className="far fa-check-circle sm-icon"></i>
                    <p>{topic}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
