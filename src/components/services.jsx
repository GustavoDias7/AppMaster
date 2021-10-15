const Services = ({ ServicesContent }) => {
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

  const servicesCardList = ServicesContent.map((myContent) => (
    <ServicesCard myContent={myContent} key={myContent.title} />
  ));

  return (
    <section id="services">
      <div className="main-container">
        <h2>Serviços</h2>
        <div id="services-card-container">{servicesCardList}</div>
      </div>
    </section>
  );
};

export default Services;
