import React from "react";
import styles from "./Form.module.css";

const Error = ({ children }) => {
  return <p className={styles.error}>{children}</p>;
};

export default Error;
