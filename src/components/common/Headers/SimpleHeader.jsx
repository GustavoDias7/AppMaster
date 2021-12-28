import React from "react";
import { Link } from "react-router-dom";
import styles from "./Headers.module.css";

const SimpleHeader = () => {
  return (
    <header id={styles.mainHeader}>
      <div className="container">
        <div className={styles.content}>
          <Link className={styles.logo} to="/">
            <h1>AppMaster</h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
