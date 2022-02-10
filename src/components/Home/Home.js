import { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import styles from "./Home.module.css";

import AllTeams from "../AllTeams/AllTeams";
import Banner from "../Banner/Banner";
import classNames from "classnames";

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams))
      .then(()=> setLoading(true))
  }, []);

  return (
    <main className={styles.mainSection}>
      <Banner />
      <div className={classNames("container mt-4", styles.mainContainer)}>
        <Row className={classNames("justify-content-center", "align-items-center")}>
          {
            loading ? teams.map((team) => 
              <AllTeams key={team.idTeam} team={team} />
            ) : <Spinner animation="border" variant="primary" />
          }

        </Row>
      </div>
    </main>
  );
};

export default Home;
