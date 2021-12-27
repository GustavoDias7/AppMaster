import React from "react";
import { Link } from "react-router-dom";

const SimpleHeader = () => {
  return (
    <header id="main-header">
      <div className="container">
        <div className="content">
          <Link className="logo" to="/">
            <h1>AppMaster</h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
