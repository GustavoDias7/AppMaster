import React from "react";
import useApp from "../context/GlobalContext";

const navLinks = [
  ["Home", "root"],
  ["Sobre", "about"],
  ["Serviços", "services"],
  ["Clientes", "clients"],
  ["Portfólio", "portfolio"],
  ["Time", "our-team"],
  ["Contatos", "contact-us"],
];

const MainHeader = () => {
  const { setSidebar } = useApp();

  return (
    <header id="main-header">
      <div className="main-container">
        <div id="main-header-content">
          <a className="logo" href="/">
            <h1>AppMaster</h1>
          </a>
          <nav className="navbar">
            <ul>
              {navLinks.map((link) => {
                return (
                  <li key={link}>
                    <a onClick={() => setSidebar(false)} href={"#" + link[1]}>
                      {link[0]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
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
