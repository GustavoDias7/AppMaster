import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [sentPopup, setSentPopup] = useState(false);
  const [zoom, setZoom] = React.useState(false);
  const [indexImage, setIndexImage] = React.useState(0);

  const values = {
    sidebar,
    setSidebar,
    sentPopup,
    setSentPopup,
    zoom,
    setZoom,
    indexImage,
    setIndexImage,
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
