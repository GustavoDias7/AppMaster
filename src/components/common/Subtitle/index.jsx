import React from "react";
import styles from "./Subtitle.module.css";

const Subtitle = ({ children, ...rest }) => {
  return (
    <p className={styles.subtitle} {...rest}>
      {children}
    </p>
  );
};

export default Subtitle;
