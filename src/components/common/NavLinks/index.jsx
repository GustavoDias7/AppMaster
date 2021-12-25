import React from "react";
import useApp from "context/GlobalContext";
import scrollToTitle from "helper/scrollToTitle";

const navLinks = [
  { innerText: "Home", idTitle: "root", isDefaultPrevented: true },
  { innerText: "Sobre", idTitle: "about", isDefaultPrevented: true },
  { innerText: "Serviços", idTitle: "services", isDefaultPrevented: true },
  { innerText: "Clientes", idTitle: "clients", isDefaultPrevented: true },
  { innerText: "Portfólio", idTitle: "portfolio", isDefaultPrevented: true },
  { innerText: "Time", idTitle: "our-team", isDefaultPrevented: true },
  { innerText: "Contatos", idTitle: "contact-us", isDefaultPrevented: true },
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
                  scrollToTitle(event, link.idTitle, link.isDefaultPrevented);
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
