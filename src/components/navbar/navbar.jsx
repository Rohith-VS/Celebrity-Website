import React from "react";
import styles from "./navbar.module.scss";
import logo from "../../images/brandLogo.svg";
import { Link, useHistory } from "react-router-dom";
const Navbar = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navItemWrapper}>
        <div className={styles.brandLogo} onClick={handleClick}>
          <img className={styles.brandImage} src={logo} alt="CR7" />
        </div>
        <div className={styles.navLinks}>
          <Link className={styles.link} to="/bio">
            BIO
          </Link>
          <Link className={styles.link} to="/fixtures">
            FIXTURES
          </Link>
          <Link className={styles.link} to="">
            MEDIA
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
