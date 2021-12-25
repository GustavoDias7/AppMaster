import React from "react";
import Avatar01 from "../../assets/images/avatar-05.jpg";
import Avatar02 from "../../assets/images/avatar-04.jpg";
import Avatar03 from "../../assets/images/avatar-06.jpg";
import Avatar04 from "../../assets/images/avatar-07.jpg";
import Title from "../Title";

/* === OUR-TEAM === */
const teamInfos = [
  {
    image: Avatar01,
    name: "Carlos Vargas",
    type: "CEO e CTO",
    links: {
      twitter: "https://www.twitter.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    image: Avatar02,
    name: "Mia Sarile",
    type: "Gerente de Marketing",
    links: {
      twitter: "https://www.twitter.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    image: Avatar03,
    name: "Rafaela Gomes",
    type: "Desenvolvedora Android",
    links: {
      twitter: "https://www.twitter.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    image: Avatar04,
    name: "Igor Rodrigues",
    type: "Desenvolvedor IOS",
    links: {
      twitter: "https://www.twitter.com/",
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
        <img
          src={image}
          alt={name}
          className="image-team"
          width="273"
          height="328"
        />
      </div>
      <div className="team-descripttion">
        <h3>{name}</h3>
        <p>{type}</p>
        <div className="social-links">
          <a
            href={links.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Link do nosso twitter"
          >
            <i className="fab fa-twitter sm-icon"></i>
          </a>
          <a
            href={links.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Link do nosso facebook"
          >
            <i className="fab fa-facebook sm-icon"></i>
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Link do nosso instagram"
          >
            <i className="fab fa-instagram sm-icon"></i>
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Link do nosso linkedin"
          >
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
        <Title>Nosso Time</Title>
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
