const Topbar = ({ contactInfo: { email, phoneNumber, links } }) => {
  return (
    <section id="topbar">
      <div className="main-container">
        <div id="topbar-content">
          <div id="contact-info-container">
            <div className="contact-info">
              <i className="far fa-envelope sm-icon"></i>
              <p>{email}</p>
            </div>
            <div className="contact-info">
              <i className="fas fa-mobile-alt sm-icon"></i>
              <p>{phoneNumber}</p>
            </div>
          </div>
          <div className="social-links">
            <a href={links.twitter} target="_blank" rel="noreferrer">
              <i className="fab fa-twitter sm-icon"></i>
            </a>
            <a href={links.facebook} target="_blank" rel="noreferrer">
              <i className="fab fa-facebook sm-icon"></i>
            </a>
            <a href={links.instagram} target="_blank" rel="noreferrer">
              <i className="fab fa-instagram sm-icon"></i>
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin sm-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
