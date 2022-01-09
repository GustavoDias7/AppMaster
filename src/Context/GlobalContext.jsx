import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [sentPopup, setSentPopup] = useState(false);
  const [zoom, setZoom] = useState(false);

  const [indexImage, setIndexImage] = useState(0);
  const [formData, setFormData] = useState(
    JSON.parse(window.sessionStorage.getItem("formData")) || {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
  );

  const values = {
    sidebar,
    setSidebar,
    sentPopup,
    setSentPopup,
    zoom,
    setZoom,
    indexImage,
    setIndexImage,
    formData,
    setFormData,
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(GlobalContext);
  return context;
};

export default useApp;
