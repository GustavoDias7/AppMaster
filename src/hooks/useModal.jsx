import React from "react";

const useModal = () => {
  const [visibilidade, setVisibility] = React.useState(false);

  const ModalTemplate = ({
    element,
    children,
    className = "",
    triggerClick,
  }) => {
    function closeOverlay(e) {
      if (e.target === e.currentTarget) {
        setVisibility(false);
        trigger();
      }
    }

    function closeButton() {
      setVisibility(false);
      trigger();
    }

    function trigger() {
      if (triggerClick) triggerClick();
    }

    return (
      <div
        className={`modal${visibilidade ? " active" : ""}${" " + className}`}
        onClick={closeOverlay}
      >
        <div className="content">
          <button className="close" onClick={closeButton}>
            X
          </button>
          {element || children}
        </div>
      </div>
    );
  };

  return [ModalTemplate, setVisibility];
};

export default useModal;
