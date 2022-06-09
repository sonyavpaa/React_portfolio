import React from "react";

import Intro from "./Intro";
import Projects from "./Projects";

import "../style/Home.css";

const Home = () => {
  //pancake's text display on hover
  const pancakeTextHover = async (e) => {
    let header = await e.target?.firstChild?.data;
    let projectsText = await document.querySelector("#projectsText");
    projectsText.innerHTML = `${header} </br>${header} description`;
  };
  const pancakeTextHoverOut = () => {
    let projectsText = document.querySelector("#projectsText");
    projectsText.innerHTML = "";
  };
  return (
    <>
      <div id="stickyContainer">
        <div id="logoBox" className="animate">
          <div className="logo"></div>
          <div className="projectsTextContainer">
            <p id="projectsText"></p>
          </div>
        </div>
      </div>
      <Intro />
      <Projects
        onMouseEnter={pancakeTextHover}
        onMouseLeave={pancakeTextHoverOut}
      />
    </>
  );
};

export default Home;
