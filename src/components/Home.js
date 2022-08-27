import React from "react";

import Intro from "./Intro";
import Projects from "./Projects";

import "../style/Home.css";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import ContactForm from "./ContactForm";
import { projectsArr } from "../assets/projectsAPI";
import { isBrowser } from "react-device-detect";

const Home = () => {
  const [username, setUsername] = React.useState();
  const getName = (e) => {
    setUsername(e.target.value);
  };
  //pancake's text display on hover
  const pancakeTextHover = async (e) => {
    if (isBrowser) {
      e.currentTarget.children[1].style = "opacity:1";
    }
    let header = projectsArr[parseInt(e.currentTarget.id)]?.header;
    let description = projectsArr[parseInt(e.currentTarget.id)]?.desc;
    let projectsText = await document.querySelector("#projectsText");
    projectsText.innerHTML = `${header} </br>${description}`;
  };
  const pancakeTextHoverOut = (e) => {
    if (isBrowser) {
      e.currentTarget.children[1].style = "opacity:0";
    }
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
      <Intro getName={getName} />
      <Projects
        onMouseEnter={pancakeTextHover}
        onMouseLeave={pancakeTextHoverOut}
      />
      <AboutMe username={username} />
      <Skills />
      <ContactForm />
    </>
  );
};

export default Home;
