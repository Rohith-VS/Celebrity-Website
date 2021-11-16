import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerCoreWrapper}>
        <div className={styles.copyright}>
          <h3>© 2021 All rights Reserved </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
