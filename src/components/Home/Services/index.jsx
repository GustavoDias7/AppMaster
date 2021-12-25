import React from "react";
import Title from "components/common/Title";

const ServicesContent = [
  {
    title: "Notícias",
    content:
      "Os seus clientes mais assíduos podem acompanhar todas as novidades da sua empresa, como promoções, novos produtos e etc.",
    icon: "far fa-file-alt",
  },
  {
    title: "Finanças",
    content:
      "Aplicativos para fazer transações seguras, organizar as finanças pessoais e evitar gastos desnecessários.",
    icon: "fas fa-dollar-sign",
  },
  {
    title: "Games",
    content:
      "Produzimos diversos tipos de jogos para celular, dentre eles: estratégia, aventura, cartas, música, puzzle e multiplayer.",
    icon: "fas fa-gamepad",
  },
  {
    title: "Comida e bebidas",
    content:
      "Para você que tem seu restaurante e quer que seus clientes façam pedidos com apenas 1 clique.",
    icon: "fas fa-utensils",
  },
];

const ServicesCard = ({ myContent }) => {
  const { icon, title, content } = myContent;
  return (
    <div className="services-card">
      <i className={icon}></i>
      <div className="services-card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services">
      <div className="main-container">
        <Title>Serviços</Title>
        <div id="services-card-container">
          {ServicesContent.map((myContent) => (
            <ServicesCard myContent={myContent} key={myContent.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
