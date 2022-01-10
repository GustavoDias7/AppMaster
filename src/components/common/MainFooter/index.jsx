import React from "react";
import styles from "./MainFooter.module.css";

const MainFooter = () => (
  <footer className={styles.mainFooter}>
    <div className="container">
      <p>
        Desenvolvido por{" "}
        <a href="www.linkedin.com/in/gustavo-dias-3100211b6">Gustavo Dias</a>
      </p>
    </div>
  </footer>
);

export default MainFooter;
