import React from "react";

/* === OUR-TEAM === */
const teamInfos = [
  {
    image: "./img/avatar-05.jpg",
    name: "Carlos Vargas",
    type: "CEO",
    links: {
      twitter: "https://www.twitter.com/carlos",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    image: "./img/avatar-04.jpg",
    name: "Mia Sarile",
    type: "CTO",
    links: {
      twitter: "https://www.twitter.com/mia",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    image: "./img/avatar-06.jpg",
    name: "Rafaela Gomes",
    type: "Gerente de Projetos",
    links: {
      twitter: "https://www.twitter.com/rafaela",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    image: "./img/avatar-07.jpg",
    name: "Igor Rodrigues",
    type: "Gerente de Marketing",
    links: {
      twitter: "https://www.twitter.com/igor",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
];

const TeamCard = ({ team }) => {
  const { image, name, type, links } = team;

  return (
    <figure className="team-card">
      <div className="image-team-container">
        <img src={image} alt={name} className="image-team" />
      </div>
      <div className="team-descripttion">
        <h3>{name}</h3>
        <p>{type}</p>
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
    </figure>
  );
};

const OurTeam = () => {
  return (
    <section id="our-team">
      <div className="main-container">
        <h2>Nosso Time</h2>
        <div className="team-container">
          {teamInfos.map((team) => (
            <TeamCard team={team} key={team.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
