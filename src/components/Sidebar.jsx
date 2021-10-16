import React from "react";
import useApp from "../Context/GlobalContext";
import SocialLinks from "./SocialLinks";

const navLinks = [
  ["Home", "root"],
  ["Sobre", "about"],
  ["Serviços", "services"],
  ["Clientes", "clients"],
  ["Portfólio", "portfolio"],
  ["Time", "our-team"],
  ["Contatos", "contact-us"],
];

const Sidebar = () => {
  const { sidebar, setSidebar } = useApp();

  function clickOverlay(e) {
    if (e.target === e.currentTarget) {
      setSidebar(false);
    }
  }

  return (
    <div
      className={`sidebar${sidebar ? " active" : ""}`}
      onClick={clickOverlay}
    >
      <nav className="content">
        <button className="close" onClick={() => setSidebar(false)}>
          X
        </button>
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
        <SocialLinks />
      </nav>
    </div>
  );
};

export default Sidebar;
