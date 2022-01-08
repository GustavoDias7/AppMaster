import React from "react";
import scrollToElement from "utils/scrollToElement";

const navLinks = [
  { innerText: "Home", idTitle: "#root" },
  { innerText: "Sobre", idTitle: "#about" },
  { innerText: "Serviços", idTitle: "#services" },
  { innerText: "Clientes", idTitle: "#clients" },
  { innerText: "Portfólio", idTitle: "#portfolio" },
  { innerText: "Time", idTitle: "#our-team" },
  { innerText: "Contatos", idTitle: "#contact-us" },
];

const NavLinks = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((link) => {
          return (
            <li key={link.idTitle + "-sidebar"}>
              <a href="/" onClick={(e) => scrollToElement(e, link.idTitle)}>
                {link.innerText}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
