import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import CountdownTimer from "./countdown/CountdownTimer";
import Social from "./social/social";
import EvolutionMoney from "./evolution_money";
import Descriptions from "./descriptions";

import Timer from "./Timer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="App">
        {/* <CountdownTimer /> */}
        <EvolutionMoney />
        <Descriptions />
        <Social />
        <span style={{ marginBottom: 10, color: "grey" }}>
          Developed by{" "}
          <a href="https://expebyteapps.com" style={{ color: "grey" }}>
            Expebyte Apps
          </a>
        </span>
      </div>
    </>
  );
};

export default Home;
