import React from "react";
import useModal from "hooks/useModal";

const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [sidebar, setSidebar] = React.useState(false);
  const [SentPopup, setSentPopup] = useModal();

  const values = { sidebar, setSidebar, SentPopup, setSentPopup };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

const useApp = () => {
  const context = React.useContext(GlobalContext);
  return context;
};

export default useApp;
