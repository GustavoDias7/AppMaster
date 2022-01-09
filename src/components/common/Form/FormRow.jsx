import React from "react";
import styles from "./Form.module.css";

const FormRow = ({ children }) => {
  return <div className={styles.formRow}>{children}</div>;
};

export default FormRow;
