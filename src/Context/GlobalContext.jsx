import React from "react";

const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [sidebar, setSidebar] = React.useState(false);

  const values = { sidebar, setSidebar };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

const useApp = () => {
  const context = React.useContext(GlobalContext);
  return context;
};

export default useApp;
