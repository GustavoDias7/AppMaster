import React from "react";
import "./modal.css";

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
      className={`modal ${visibility ? "active" : ""} ${className}`}
      onClick={closeOverlay}
    >
      <div className="content">
        <button className="close" onClick={closeButton}>
          X
        </button>
        {children || element}
      </div>
    </div>
  );
};

export default Modal;
