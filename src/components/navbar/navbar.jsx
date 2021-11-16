import React from "react";
import styles from "./navbar.module.scss";
import logo from "../../images/brandLogo.svg";
const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navItemWrapper}>
        <div className={styles.brandLogo}>
          <img className={styles.brandImage} src={logo} alt="CR7" />
        </div>
        <div className={styles.navLinks}>
          <a className={styles.link} href="">
            BIO
          </a>
          <a className={styles.link} href="">
            NEWS
          </a>
          <a className={styles.link} href="">
            MEDIA
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
