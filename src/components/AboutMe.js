import React from "react";
import { BrowserView } from "react-device-detect";

import "../style/About.css";
// import "../style/Mobile.css";

const AboutMe = ({ username }) => {
  return (
    <section className="about_me">
      <h2 id="about_me">ME LE PROGRAMMER</h2>
      <div className="boxes">
        <BrowserView className="right"></BrowserView>
        <div className="left">
          <div className="about_mePContainer">
            <p>
              Dear <span id="helloName">{username ? username : "You"}</span>,
              this portfolio is an insight into my skills gained in my web dev
              studies in Business College Helsinki. It is intended to showcase
              my current level in coding and having fun with it! <br />
              <br />
              My current top 3 interests in web dev:{" "}
              <span className="top3">gamification</span>,{" "}
              <span className="top3">React</span> and{" "}
              <span className="top3">PHP</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
