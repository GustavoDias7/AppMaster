import React from "react";
import styles from "./Modal.module.css";

const Modal = ({
  element,
  children,
  className = "",
  visibility,
  setVisibility,
}) => {
  function closeOverlay(e) {
    if (e.target === e.currentTarget) {
      setVisibility(false);
    }
  }

  function closeButton() {
    setVisibility(false);
  }

  return (
    <div
      className={`${styles.modal} ${visibility ? styles.active : ""} ${
        styles[className]
      }`}
      onClick={closeOverlay}
    >
      <article>
        <button className={styles.close} onClick={closeButton}>
          X
        </button>
        {children || element}
      </article>
    </div>
  );
};

export default Modal;
