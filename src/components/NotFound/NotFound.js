import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={classNames("text-center", styles.notFoundContent)}>
        <h1>404</h1>
        <h3>Not Found</h3>
        <p>The resource requested could not be found on this server!</p>
        <Link className={styles.goBack} to="/">
          Back to Your Home 😄
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
