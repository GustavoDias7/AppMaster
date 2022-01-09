import React from "react";
import NotFoundHead from "components/common/Head/NotFoundHead";

const NotFound = () => {
  const styles = {
    position: "absolute",
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    margin: "auto",
    width: "fit-content",
    height: "min-content",
  };
  return (
    <>
      <NotFoundHead />
      <div style={styles}>
        <h1>AppMaster | Pádina não encontrada</h1>
      </div>
    </>
  );
};

export default NotFound;
