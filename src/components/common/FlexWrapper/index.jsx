import React from "react";
import { flexWrapper } from "./FlexWrapper.module.css";

const FlexWrapper = ({ children, className = "", version = 0 }) => {
  return (
    <div className={`${flexWrapper} ${className}`} version={version}>
      {children}
    </div>
  );
};

export default FlexWrapper;
