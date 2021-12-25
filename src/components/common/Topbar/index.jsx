import React from "react";
import SocialLinks from "components/common/SocialLinks";

const Topbar = () => {
  return (
    <section id="topbar">
      <div className="container">
        <div className="contact-info">
          <a href="mailto:appmaster@gmail.com">
            <i className="far fa-envelope sm-icon"></i>
            <p>appmaster@gmail.com</p>
          </a>
          <a href="tel:552140028922">
            <i className="fas fa-mobile-alt sm-icon"></i>
            <p>+55 (21)4002-8922</p>
          </a>
        </div>
        <SocialLinks color="#444" />
      </div>
    </section>
  );
};

export default Topbar;
