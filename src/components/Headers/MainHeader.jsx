import React from "react";
import useApp from "../../context/GlobalContext";
import NavLinks from "../NavLinks";

const MainHeader = () => {
  const { setSidebar } = useApp();

  return (
    <header id="main-header">
      <div className="main-container">
        <div id="main-header-content">
          <a className="logo" href="/">
            <h1>AppMaster</h1>
          </a>
          <NavLinks />
          <button
            className="hamburger"
            onClick={() => setSidebar(true)}
            aria-label="Menu lateral"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
