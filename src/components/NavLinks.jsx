import React from "react";
import useApp from "../context/GlobalContext";
// e === link event
// id === id name of section
// preventDefault === if link have to be prevented

const navLinks = [
  { innerText: "Home", id: "root", isDefaultPrevented: true },
  { innerText: "Sobre", id: "about", isDefaultPrevented: true },
  { innerText: "Serviços", id: "services", isDefaultPrevented: true },
  { innerText: "Clientes", id: "clients", isDefaultPrevented: true },
  { innerText: "Portfólio", id: "portfolio", isDefaultPrevented: true },
  { innerText: "Time", id: "our-team", isDefaultPrevented: true },
  { innerText: "Contatos", id: "contact-us", isDefaultPrevented: true },
];

const scrollToTitle = (event, id, isDefaultPrevented) => {
  if (isDefaultPrevented) event.preventDefault();
  const title = document.getElementById(id);
  const headerHeight = document.getElementById("main-header").clientHeight + 10;
  window.scrollTo(0, title.offsetTop - headerHeight);
};

export const NavLinks = ({ isSidebar = false }) => {
  const { setSidebar } = useApp();

  return (
    <nav className="navbar">
      <ul>
        {navLinks.map((link) => {
          return (
            <li key={link.innerText + "-sidebar"}>
              <a
                onClick={(event) => {
                  scrollToTitle(event, link.id, link.isDefaultPrevented);
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
