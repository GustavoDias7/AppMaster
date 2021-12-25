import React from "react";
import SocialLinks from "../SocialLinks";

const Topbar = () => {
  return (
    <section id="topbar">
      <div className="main-container">
        <div id="topbar-content">
          <div id="contact-info-container">
            <a href="mailto:appmaster@gmail.com" className="contact-info">
              <i className="far fa-envelope sm-icon"></i>
              <p>appmaster@gmail.com</p>
            </a>
            <a href="tel:552140028922" className="contact-info">
              <i className="fas fa-mobile-alt sm-icon"></i>
              <p>+55 (21)4002-8922</p>
            </a>
          </div>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
