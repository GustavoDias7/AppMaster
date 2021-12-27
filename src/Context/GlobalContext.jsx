import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [sentPopup, setSentPopup] = useState(false);

  const values = { sidebar, setSidebar, sentPopup, setSentPopup };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(GlobalContext);
  return context;
};

export default useApp;
