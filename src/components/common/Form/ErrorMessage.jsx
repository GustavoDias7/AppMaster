import React from "react";
import styles from "./Form.module.css";

const ErrorMessage = ({ children }) => {
  return <p className={styles.errorMessage}>{children}</p>;
};

export default ErrorMessage;
