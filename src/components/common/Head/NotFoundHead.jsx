import React from "react";
import Helmet from "react-helmet";

const NotFoundHead = () => {
  const styles = {
    position: "absolute",
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    margin: "auto",
    width: "fit-content",
    width: "-moz-fit-content",
    height: "min-content",
  };
  return (
    <>
      <Helmet>
        <title>AppMaster | 404</title>
      </Helmet>
      <div style={styles}>
        <h1>AppMaster | Pádina não encontrada</h1>
      </div>
    </>
  );
};

export default NotFoundHead;
