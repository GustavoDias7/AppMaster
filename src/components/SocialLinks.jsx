import React from "react";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.twitter.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="Link do nosso twitter"
      >
        <i className="fab fa-twitter sm-icon"></i>
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="Link do nosso facebook"
      >
        <i className="fab fa-facebook sm-icon"></i>
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="Link do nosso instagram"
      >
        <i className="fab fa-instagram sm-icon"></i>
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="Link do nosso linkedin"
      >
        <i className="fab fa-linkedin sm-icon"></i>
      </a>
    </div>
  );
};

export default SocialLinks;