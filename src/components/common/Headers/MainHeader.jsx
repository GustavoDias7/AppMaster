import React from "react";
import NavLinks from "components/common/NavLinks";
import Burger from "components/common/Buttons/Burger";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header id="main-header">
      <div className="container">
        <div className="content">
          <Link className="logo" to="/">
            <h1>AppMaster</h1>
          </Link>
          <NavLinks />
          <Burger />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
