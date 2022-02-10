import React from "react";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import styles from "./SocialIcons.module.css";

const SocialIcons = ({ youtube, facebook, twitter, web, instagram }) => {
  return (
    <div className={styles.socialIcon}>
      {facebook && (
        <a target="_blank" rel="noreferrer" href={"https://" + facebook}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      )}
      {twitter && (
        <a target="_blank" rel="noreferrer" href={"https://" + twitter}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      )}
      {instagram && (
        <a target="_blank" rel="noreferrer" href={"https://" + instagram}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      )}
      {web && (
        <a target="_blank" rel="noreferrer" href={"https://" + web}>
          <FontAwesomeIcon icon={faGlobe} />
        </a>
      )}
      {youtube && (
        <a target="_blank" rel="noreferrer" href={"https://" + youtube}>
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      )}
    </div>
  );
};

export default SocialIcons;
