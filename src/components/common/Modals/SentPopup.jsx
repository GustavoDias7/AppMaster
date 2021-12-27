import useApp from "context/GlobalContext";
import React from "react";
import Modal from "./Modal";

const SentPopup = () => {
  const { sentPopup, setSentPopup } = useApp();

  return (
    <Modal
      visibility={sentPopup}
      setVisibility={setSentPopup}
      className="sentPopup"
    >
      <h2>Sucesso!!!</h2>
      <p>
        Seu e-mail foi enviado. Nossa equipe entrará em contato o mais rápido
        possível.
      </p>
    </Modal>
  );
};

export default SentPopup;
