import React from "react";

const ServicesContent = [
  {
    title: "Aplicativo",
    content:
      "Desenvolvemos a versão Android e IOS do seu app e disponibilizamos na Play Store e na App Store.",
    icon: "fas fa-mobile-alt",
  },
  {
    title: "Websites",
    content:
      "Seu site será encontrado na internet e irá atrair potenciais compradores e investidores.",
    icon: "far fa-file-word",
  },
  {
    title: "Desktop",
    content:
      "Uma solução para ser instalada e utilizada diretamente no computador, sem a necessidade de ter internet.",
    icon: "fas fa-desktop",
  },
  {
    title: "Consultoria",
    content:
      "Se você já tem um app e não sabe o que fazer, nós elaboramos a melhor estratégia para seu negócio.",
    icon: "far fa-smile",
  },
];

const ServicesCard = ({ myContent }) => {
  const { icon, title, content } = myContent;
  return (
    <div className="services-card">
      <i className={icon + " md-icon"}></i>
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
        <h2>Serviços</h2>
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
