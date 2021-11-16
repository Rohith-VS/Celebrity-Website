import React from "react";
import styles from "./App.module.scss";
import Navbar from "../components/navbar/navbar";
import Home from "../pages/home/home";
import Bio from "../pages/bio/bio";
import { Route, Switch } from "react-router-dom";
import News from "../pages/news/news";

const App = () => {
  return (
    // <Router>
    <div className={styles.appWrapper}>
      <div className={styles.appCoreWrapper}>
        <div className={styles.appContainer}>
          <Navbar />
          <Switch>
            <Route exact path="/bio">
              <Bio />
            </Route>
            <Route exact path="/fixtures">
              <News />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
    // </Router>
  );
};

export default App;
