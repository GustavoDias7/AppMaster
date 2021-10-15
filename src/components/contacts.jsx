const Contacts = ({ contactInfo }) => {
  const { address, phoneNumber, email } = contactInfo;
  return (
    <section id="contact-us">
      <div className="main-container">
        <div className="section-header">
          <h2>Contatos</h2>
          <p>
            Entre em contato com a nossa equipe caso tenha alguma dúvida ou
            interesse em nossos serviços.
          </p>
        </div>
        <div className="contact-card-container">
          <div className="contact-card">
            <i className="fas fa-map-marker-alt md-icon"></i>
            <h3>Endereço</h3>
            <p>{address}</p>
          </div>
          <div className="contact-card">
            <i className="fas fa-mobile-alt md-icon"></i>
            <h3>Telefone</h3>
            <p>{phoneNumber}</p>
          </div>
          <div className="contact-card">
            <i className="far fa-envelope md-icon"></i>
            <h3>Email</h3>
            <p>{email}</p>
          </div>
        </div>
        <form id="contact-form">
          <ul>
            <li className="row-contact-form">
              <input id="name" type="text" placeholder="Seu nome" />
              <input type="email" placeholder="Seu Email" />
            </li>
            <li className="row-contact-form">
              <input type="text" placeholder="Assunto" />
            </li>
            <li className="row-contact-form">
              <textarea placeholder="Mensagem"></textarea>
            </li>
            <li className="row-contact-form">
              <input
                className="main-button contact-form-btn"
                type="button"
                value="Enviar"
              />
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
