import React from "react";
import NavLinks from "components/common/NavLinks";
import Burger from "components/common/Buttons/Burger";
import { Link } from "react-router-dom";
import styles from "./Headers.module.css";

const MainHeader = () => {
  return (
    <header id={styles.mainHeader}>
      <div className="container">
        <div className={styles.content}>
          <Link className={styles.logo} to="/">
            <h1>AppMaster</h1>
          </Link>
          <NavLinks />
          <Burger />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
