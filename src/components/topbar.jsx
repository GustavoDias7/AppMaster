import React from "react";

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
          <div className="social-links">
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter sm-icon"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook sm-icon"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram sm-icon"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin sm-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
