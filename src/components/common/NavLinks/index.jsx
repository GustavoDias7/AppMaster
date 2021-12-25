import React from "react";
import useApp from "context/GlobalContext";
import scrollToTitle from "helper/scrollToTitle";

const navLinks = [
  { innerText: "Home", idTitle: "root" },
  { innerText: "Sobre", idTitle: "about" },
  { innerText: "Serviços", idTitle: "services" },
  { innerText: "Clientes", idTitle: "clients" },
  { innerText: "Portfólio", idTitle: "portfolio" },
  { innerText: "Time", idTitle: "our-team" },
  { innerText: "Contatos", idTitle: "contact-us" },
];

const NavLinks = ({ isSidebar = false }) => {
  const { setSidebar } = useApp();

  return (
    <nav className="navbar">
      <ul>
        {navLinks.map((link) => {
          return (
            <li key={link.idTitle + "-sidebar"}>
              <a
                onClick={(event) => {
                  scrollToTitle(event, link.idTitle);
                  if (isSidebar) setSidebar(false);
                }}
                href="/"
              >
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
