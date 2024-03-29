import React from "react";
import Avatar01 from "assets/images/avatar-05.jpg";
import Avatar02 from "assets/images/avatar-04.jpg";
import Avatar03 from "assets/images/avatar-06.jpg";
import Avatar04 from "assets/images/avatar-07.jpg";
import Title from "components/common/Title";
import SocialLinks from "components/common/SocialLinks";
import FlexWrapper from "components/common/FlexWrapper";
import styles from "./OurTeam.module.css";

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

const TeamCard = ({ image, name, type, links }) => {
  return (
    <figure>
      <div className={styles.image}>
        <img src={image} alt={name} width="273" height="328" />
      </div>
      <div className={styles.descripttion}>
        <h3>{name}</h3>
        <p>{type}</p>
        <SocialLinks color="#fff" {...links} />
      </div>
    </figure>
  );
};

const OurTeam = () => {
  return (
    <section id="our-team">
      <div className="container">
        <Title>Nosso Time</Title>
        <FlexWrapper version="1">
          {teamInfos.map((team) => (
            <TeamCard {...team} key={team.name} />
          ))}
        </FlexWrapper>
      </div>
    </section>
  );
};

export default OurTeam;
