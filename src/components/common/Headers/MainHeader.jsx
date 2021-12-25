import React from "react";
import NavLinks from "components/common/NavLinks";
import Burger from "components/common/Buttons/Burger";

const MainHeader = () => {
  return (
    <header id="main-header">
      <div className="container">
        <div className="content">
          <a className="logo" href="/">
            <h1>AppMaster</h1>
          </a>
          <NavLinks />
          <Burger />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
