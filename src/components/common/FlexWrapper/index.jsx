import React from "react";
import styles from "./FlexWrapper.module.css";

const FlexWrapper = ({ children, className = "", version = 0 }) => {
  return (
    <div className={`${styles.flexWrapper} ${className}`} version={version}>
      {children}
    </div>
  );
};

export default FlexWrapper;
