import React, { useRef } from "react";
import useApp from "context/GlobalContext";
import Title from "components/common/Title";
import Button from "components/common/Buttons/Button";
import Input from "components/common/Form/Input";
import Textarea from "components/common/Form/Textarea";
import FlexWrapper from "components/common/FlexWrapper";
import { Form } from "@unform/web";
import * as yup from "yup";
import { contactSchema } from "utils/schemas";

const Contacts = () => {
  const { SentPopup, setSentPopup } = useApp();
  const formRef = useRef(null);

  const handleFormSubmit = async (data) => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = yup.object().shape(contactSchema);

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed

      setSentPopup(true);
      console.log(data);
    } catch (err) {
      const validationErrors = {};

      if (err instanceof yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  };

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

        <Form id="contact-form" ref={formRef} onSubmit={handleFormSubmit}>
          <FlexWrapper version="4">
            <Input id="name" name="name" placeholder="Seu nome" />
            <Input id="email" name="email" placeholder="Seu Email" />
          </FlexWrapper>
          <Input id="subject" name="subject" placeholder="Assunto do Email" />
          <Textarea id="message" name="message" placeholder="Sua mensagem" />
          <Button id="fmButton" type="submit">
            Enviar
          </Button>
        </Form>

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
