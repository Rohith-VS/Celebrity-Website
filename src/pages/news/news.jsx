import React from "react";
import styles from "./news.module.scss";
import Footer from "../../components/footer/footer";

const News = () => {
  return (
    <div className={styles.newsWrapper}>
      <div className={styles.newsCoreWrapper}>
        <div className={styles.newsTitle}>
          <h1>Upcoming Matches</h1>
        </div>
        <div className={styles.newsBody}>
          <h2>Club Team</h2>
          <ul>
            <li>Premier League</li>
            <li>Federation Cup</li>
            <li>FA Cup</li>
            <li>UEFA</li>
          </ul>
          <h2>National Team</h2>
          <ul>
            <li>WCQ</li>
            <li>World Cup</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
