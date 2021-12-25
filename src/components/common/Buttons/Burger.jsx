import React from "react";
import useApp from "context/GlobalContext";
import styles from "./Burder.module.css";

const Burger = () => {
  const { setSidebar } = useApp();

  return (
    <button
      className={styles.burger}
      onClick={() => setSidebar(true)}
      aria-label="Menu lateral"
    >
      <i className="fas fa-bars" />
    </button>
  );
};

export default Burger;
