import React from "react";
import useApp from "../context/GlobalContext";
import { NavLinks } from "./NavLinks";
import SocialLinks from "./SocialLinks";

const Sidebar = () => {
  const { sidebar, setSidebar } = useApp();

  function clickOutside(e) {
    if (e.target === e.currentTarget) {
      setSidebar(false);
    }
  }

  return (
    <div
      className={`sidebar${sidebar ? " active" : ""}`}
      onClick={clickOutside}
    >
      <nav className="content">
        <button className="close" onClick={() => setSidebar(false)}>
          X
        </button>
        <NavLinks isSidebar={true} />
        <SocialLinks />
      </nav>
    </div>
  );
};

export default Sidebar;
