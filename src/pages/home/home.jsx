import React from "react";
import styles from "./home.module.scss";
import Carousel from "../../components/carousel/carousel";
import Footer from "../../components/footer/footer";
const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.carouselWrapper}>
        <Carousel />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
