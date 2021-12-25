import React, { Fragment } from "react";
import styles from "./SocialLinks.module.css";

const socialLinks = [
  {
    name: "twitter",
    href: "https://www.twitter.com/",
    icon: "fab fa-twitter",
  },
  {
    name: "facebook",
    href: "https://www.facebook.com/",
    icon: "fab fa-facebook",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/",
    icon: "fab fa-instagram",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/",
    icon: "fab fa-linkedin",
  },
];

const SocialLinks = (props) => {
  return (
    <div className={styles.socialLinks}>
      {socialLinks.map(({ name, href, icon }) => {
        return (
          <Fragment key={name + "-social-links"}>
            <a
              href={props[name] || href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Link do ${name}`}
            >
              <i className={icon} style={{ color: props.color }} />
            </a>
            <span
              className={styles.line}
              style={{ backgroundColor: props.color }}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default SocialLinks;
