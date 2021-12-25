import React, { createContext, useContext, useState } from "react";
import useModal from "hooks/useModal";

const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [SentPopup, setSentPopup] = useModal();

  const values = { sidebar, setSidebar, SentPopup, setSentPopup };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(GlobalContext);
  return context;
};

export default useApp;
