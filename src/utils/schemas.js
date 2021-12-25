import * as yup from "yup";

export const contactSchema = {
  name: yup.string().required("Insira seu nome"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("Insira seu email"),
  subject: yup.string().required("Insira o assunto"),
  message: yup.string().required("Insira sua mensagem"),
};
