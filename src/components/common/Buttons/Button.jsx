import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, id, ...rest }) => {
  return (
    <button className={styles.gnButton} id={id ? styles[id] : ""} {...rest}>
      {children}
    </button>
  );
};

export default Button;
