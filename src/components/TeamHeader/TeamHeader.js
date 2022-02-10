import styles from "./TeamHeader.module.css";

const TeamHeader = ({ banner, logo }) => {
  const teamDynamicBanner = {
    backgroundImage: `url(${banner})`,
  };
  const teamLocalBanner = {
    backgroundImage: "url(https://i.ibb.co/9gtsCTW/header-banner.jpg)",
  };

  return (
    <header
      style={banner ? teamDynamicBanner : teamLocalBanner}
      className={styles.teamHeader}
    >
      <div className={styles.teamBadge}>
        <img src={logo} alt={logo} />
      </div>
    </header>
  );
};

export default TeamHeader;
