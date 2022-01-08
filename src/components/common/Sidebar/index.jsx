import React from "react";
import useApp from "context/GlobalContext";
import NavLinks from "components/common/NavLinks";
import SocialLinks from "components/common/SocialLinks";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const { sidebar, setSidebar } = useApp();

  function clickOutside(e) {
    if (e.target === e.currentTarget) setSidebar(false);
    else if (e.target.tagName === "A") setSidebar(false);
  }

  return (
    <div
      className={`${styles.sidebar} ${sidebar ? styles.active : ""}`}
      onClick={clickOutside}
    >
      <div className={styles.content}>
        <button className={styles.close} onClick={() => setSidebar(false)}>
          X
        </button>
        <NavLinks />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Sidebar;
