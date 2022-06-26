import React from "react";

import Intro from "./Intro";
import Projects from "./Projects";

import "../style/Home.css";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import ContactForm from "./ContactForm";

const Home = () => {
  const [username, setUsername] = React.useState();
  const getName = (e) => {
    setUsername(e.target.value);
  };
  //pancake's text display on hover
  const pancakeTextHover = async (e) => {
    let header = await e.target?.firstChild?.data;
    console.log(header);
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
