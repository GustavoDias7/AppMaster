import React from "react";
import styles from "./Title.module.css";

const Title = ({ children, ...rest }) => {
  return (
    <h2 className={styles.title} {...rest}>
      {children}
    </h2>
  );
};

export default Title;
