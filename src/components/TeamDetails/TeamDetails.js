import {
  faFutbol,
  faMapMarked,
  faMars,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import styles from "./TeamDetails.module.css";

import SocialIcons from "../SocialIcons/SocialIcons";
import TeamHeader from "../TeamHeader/TeamHeader";

const TeamDetails = () => {
  let { id } = useParams();
  const [club, setClub] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setClub(data.teams[0]))
      .then(() => setLoading(true));
  }, [id]);

  const {
    strTeamFanart4,
    strDescriptionEN,
    idTeam,
    strAlternate,
    strCountry,
    intFormedYear,
    strTeamBadge,
    strFacebook,
    strGender,
    strTwitter,
    strWebsite,
    strInstagram,
    strYoutube,
    strSport,
  } = club;

  const maleBanner = (
    <img src="https://i.ibb.co/bRLcsKB/thumbs-b-c-ddb5278adc7518b5b034603f12315768.jpg" alt="male"/>
  );
  const femaleBanner = (
    <img src="https://i.ibb.co/TK8fhRC/female.png" alt="female" />
  );
  const mixedBanner = (
    <img src="https://i.ibb.co/3N5NYS9/mixed.png" alt="mixed" />
  );

  // String separate in multiple paragraph
  const description = strDescriptionEN?.split(" ");
  const first100Paragraphs = description?.slice(0, 100).join(" ");
  const second100Paragraphs = description?.slice(100, 200).join(" ");
  const restParagraphs = description?.slice(200).join(" ");

  return (
    <>
      {loading ? (
        <div className={styles.teamContainer}>
          <TeamHeader banner={strTeamFanart4} logo={strTeamBadge} />

          <div className={styles.breadcrumb}>
            <span>
              <Link to="/">Home</Link> {">"}
              <Link className={styles.active} to={"/team/" + idTeam}>                
                Team
              </Link>
            </span>
          </div>

          <Container>
            <div className={styles.teamContainer}>
              <Row className={styles.teamInfo}>
                <Col md={7}>
                  <h1>{strAlternate}</h1>
                  <div className={styles.teamParagraphInfo}>
                    <p>
                      <FontAwesomeIcon icon={faMapMarked}></FontAwesomeIcon>
                      Founded: {intFormedYear}
                    </p>
                    <p>
                      {strCountry}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon> Sports
                      Type: {strSport}
                    </p>
                    {strGender === "Male" && (
                      <p>
                        <FontAwesomeIcon icon={faMars}></FontAwesomeIcon>
                        Gender: {strGender}
                      </p>
                    )}
                    {strGender === "Female" && (
                      <p>
                        <FontAwesomeIcon icon={faVenus}></FontAwesomeIcon>
                        Gender: {strGender}
                      </p>
                    )}
                  </div>
                </Col>
                <Col className={styles.teamImage} md={5}>
                  {strGender === "Male" && maleBanner}
                  {strGender === "Female" && femaleBanner}
                  {strGender === "Mixed" && mixedBanner}
                </Col>
              </Row>
            </div>
            <div className={styles.teamContent}>
              <p>{first100Paragraphs}</p>
              <p>{second100Paragraphs}</p>
              <p>{restParagraphs}</p>
            </div>
          </Container>
          <SocialIcons
            key={idTeam}
            instagram={strInstagram}
            youtube={strYoutube}
            facebook={strFacebook}
            web={strWebsite}
            twitter={strTwitter}
          />
        </div>
      ) : (
        <div className={styles.loadingSpinner}>
          <Spinner animation="border" variant="primary" />
        </div>
      )}

    </>
  );
};

export default TeamDetails;
