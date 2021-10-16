import React from "react";
import SocialLinks from "./SocialLinks";

const Topbar = () => {
  return (
    <section id="topbar">
      <div className="main-container">
        <div id="topbar-content">
          <div id="contact-info-container">
            <div className="contact-info">
              <i className="far fa-envelope sm-icon"></i>
              <p>appmaster@gmail.com</p>
            </div>
            <div className="contact-info">
              <i className="fas fa-mobile-alt sm-icon"></i>
              <p>+55 (21)4002-8922</p>
            </div>
          </div>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
