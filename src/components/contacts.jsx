import React from "react";

const Contacts = () => {
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
            <p>Rio de Janeiro-RJ, Brasil</p>
          </div>
          <div className="contact-card">
            <i className="fas fa-mobile-alt md-icon"></i>
            <h3>Telefone</h3>
            <p>+55 (21)4002-8922</p>
          </div>
          <div className="contact-card">
            <i className="far fa-envelope md-icon"></i>
            <h3>Email</h3>
            <p>appmaster@gmail.com</p>
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
