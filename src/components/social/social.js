// import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect } from "react";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Container } from "react-bootstrap";
import "./style.css";

import Aos from "aos";
import "aos/dist/aos.css";

const Social = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="container">
      <div
        className="social-content"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <h1>
          <span>Connect</span> With Us on Social Media
        </h1>
        <div className="social-media-icons-white">
          <a href="https://www.facebook.com/ddoc21">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/ddoc_1/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/ddoc_1">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.youtube.com/channel/UCrIR487LeMpR8BgtZEoimHQ">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
