import React from "react";
import SocialLinks from "components/common/SocialLinks";
import styles from "./Topbar.module.css";

const Topbar = () => {
  return (
    <section id={styles.topbar}>
      <div className="container">
        <div className={styles.contactInfo}>
          <a href="mailto:appmaster@gmail.com">
            <i className="far fa-envelope" />
            <p>appmaster@gmail.com</p>
          </a>
          <a href="tel:552140028922">
            <i className="fas fa-mobile-alt" />
            <p>+55 (21)4002-8922</p>
          </a>
        </div>
        <SocialLinks color="#444" />
      </div>
    </section>
  );
};

export default Topbar;
