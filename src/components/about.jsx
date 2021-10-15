import React from "react";

/* === ABOUT === */
const aboutTopics = [
  "Estamos há mais de 7 anos no mercado de tecnologia, que conta com 3 escritórios espalhados pelo Rio de Janeiro.",
  "Trabalhamos com as tecnologias mais modernas do mercado, para atender às diversas necessidades dos clientes.",
  "Começamos como uma pequena agência de 3 programadores, e dessa época em diante, tivemos vários desafios que nos fizeram crescer e nos desenvolver como profissionais da área de fabricação de software.",
];

const About = () => {
  return (
    <section id="about">
      <div className="main-container">
        <div id="about-content">
          <div id="about-image">
            <img src="./img/aboult-image.jpg" alt="" />
          </div>
          <div id="about-text">
            <div id="about-text-header">
              <h2>Conheça um pouco mais sobre a AppMaster</h2>
              <p>
                Somos uma startup fabricante de software como aplicativos,
                websites e aplicações desktop.
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
