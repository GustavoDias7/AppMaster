const Testimonials = ({ testimonialInfo }) => {
  const TestimonialsCard = ({ testi }) => {
    const { quote, avatar, name, prof } = testi;
    return (
      <div className="testimonial-card">
        <div className="quote">
          <i className="fas fa-quote-left"></i>
          <p>{quote}</p>
          <i className="fas fa-quote-right"></i>
        </div>
        <img className="avatar" src={avatar} alt="avatar" />
        <h3>{name}</h3>
        <p>{prof}</p>
      </div>
    );
  };

  const testimonialsCardList = testimonialInfo.map((testi) => (
    <TestimonialsCard testi={testi} key={testi.name} />
  ));

  return (
    <section id="testimonials">
      <div className="main-container">
        <div className="section-header">
          <h2>Depoimentos</h2>
          <p>
            Veja a opinião sincera dos nossos clientes a respeito dos serviços
            prestados.
          </p>
        </div>
        <div id="testimonials-container">{testimonialsCardList}</div>
      </div>
    </section>
  );
};

export default Testimonials;
