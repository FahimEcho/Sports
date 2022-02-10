import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./AllTeams.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

const AllTeams = ({ team }) => {
  const { strTeamBadge, strTeam, idTeam } = team;

  return (
    <>
      <Col sm={6} md={4} className={styles.team}>
        <Card className={classNames("text-center", "h-100", styles.cardInfo, styles.card)}>
          <Card.Img variant="top" src={strTeamBadge} />
          <Card.Body>
            <Card.Title>{strTeam}</Card.Title>

            <Link to={`/teamDetails/${idTeam}`}>
              Explore <FontAwesomeIcon icon={faArrowRight} />              
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default AllTeams;
