import React, { useEffect, useRef } from "react";
import useApp from "context/GlobalContext";
import Title from "components/common/Title";
import Button from "components/common/Buttons/Button";
import Input from "components/common/Form/Input";
import Textarea from "components/common/Form/Textarea";
import FlexWrapper from "components/common/FlexWrapper";
import { Form } from "@unform/web";
import * as yup from "yup";
import { contactSchema } from "utils/schemas";
import Subtitle from "components/common/Subtitle";
import { contactAttributes } from "utils/inputAttributes";

const Contacts = () => {
  const { setSentPopup, formData, setFormData } = useApp();
  const formRef = useRef(null);

  useEffect(() => {
    // Set single field value
    formRef.current.setFieldValue("name", formData.name);
    formRef.current.setFieldValue("email", formData.email);
    formRef.current.setFieldValue("subject", formData.subject);
  }, [formData]);

  const handleFormSubmit = async (data, { reset }) => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = yup.object().shape(contactSchema);

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed

      // Merge all datas
      const formattedData = Object.assign({}, formData, data);
      setFormData(formattedData);
      window.sessionStorage.setItem("formData", JSON.stringify(formattedData));

      setSentPopup(true);
      reset();
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
      <div className="container">
        <Title>Contatos</Title>
        <Subtitle>
          Entre em contato com a nossa equipe caso tenha alguma dúvida ou
          interesse em nossos serviços.
        </Subtitle>

        <FlexWrapper version="2">
          <div className="contact-card">
            <i className="fas fa-map-marker-alt" />
            <h3>Endereço</h3>
            <p>Rio de Janeiro-RJ, Brasil</p>
          </div>
          <div className="contact-card">
            <i className="fas fa-mobile-alt" />
            <h3>Telefone</h3>
            <p>+55 (21)4002-8922</p>
          </div>
          <div className="contact-card">
            <i className="far fa-envelope" />
            <h3>Email</h3>
            <p>appmaster@gmail.com</p>
          </div>
        </FlexWrapper>

        <Form id="contact-form" ref={formRef} onSubmit={handleFormSubmit}>
          <FlexWrapper version="5">
            <Input {...contactAttributes.name} />
            <Input {...contactAttributes.email} />
          </FlexWrapper>
          <Input {...contactAttributes.subject} />
          <Textarea {...contactAttributes.message} />
          <Button id="fmButton" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Contacts;
