import React from "react";
import useApp from "context/GlobalContext";
import useForm from "hooks/useForm";
import Title from "components/common/Title";

const Input = ({ type = "text", id, placeholder, state }) => {
  const { value, handleChange, handleBlur, error } = state;

  return (
    <div className="input-container">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

const Textarea = ({ id, placeholder, state }) => {
  const { value, handleChange, handleBlur, error } = state;

  return (
    <div className="input-container">
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

const Contacts = () => {
  const { SentPopup, setSentPopup } = useApp();
  const name = useForm();
  const email = useForm("email");
  const subject = useForm();
  const message = useForm();
  const fields = [name, email, subject, message];

  function handleSubmit(e) {
    e.preventDefault();
    let validateAll = true;
    fields.forEach((field) => {
      if (field.validate() === false) validateAll = false;
    });
    if (validateAll) {
      setSentPopup(true);
      fields.forEach((field) => field.setValue(""));
    }
  }

  return (
    <section id="contact-us">
      <div className="main-container">
        <div className="section-header">
          <Title>Contatos</Title>
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

        <form id="contact-form" onSubmit={handleSubmit}>
          <ul>
            <li>
              <Input id="name" state={name} placeholder="Seu nome" />
              <Input
                type={"email"}
                id="email"
                state={email}
                placeholder="Seu Email"
              />
            </li>
            <li>
              <Input
                id="subject"
                state={subject}
                placeholder="Assunto do Email"
              />
            </li>
            <li>
              <Textarea
                id="message"
                state={message}
                placeholder="Sua mensagem"
              />
            </li>
            <li>
              <button className="main-button" type="submit">
                Enviar
              </button>
            </li>
          </ul>
        </form>

        <SentPopup className={"sent-popup"}>
          <h2>Sucesso!!!</h2>
          <p>
            Seu e-mail foi enviado. Nossa equipe entrará em contato o mais
            rápido possível.
          </p>
        </SentPopup>
      </div>
    </section>
  );
};

export default Contacts;
