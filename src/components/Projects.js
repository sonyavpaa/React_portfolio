import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserView, isBrowser } from "react-device-detect";

import SingleCard from "./SingleCard";

import "../style/Projects.css";
import "../style/Mobile.css";

import { projectsArr } from "../api/projectsAPI";

const Projects = ({ onMouseEnter, onMouseLeave }) => {
  const [cardText, setCardText] = useState("");
  const [url, setUrl] = useState("");

  const toggleCard = (e) => {
    let numb = parseInt(e.currentTarget.id);
    if (
      e.currentTarget.className.includes("pancakes") &&
      e.currentTarget.className.includes("pancakesFilterOff") === false
    ) {
      e.currentTarget.className =
        e.currentTarget.className + " pancakesFilterOff";
    }

    // closes possible earlier opened cards
    if (e.currentTarget.lastChild.className === "singleCardShow") {
      return (e.currentTarget.lastChild.className = "singleCardHidden");
    }

    if (document.querySelector(".singleCardShow")) {
      document.querySelector(".singleCardShow").className = "singleCardHidden";
      if (e.currentTarget.lastChild.className === "singleCardHidden") {
        return (
          (e.currentTarget.lastChild.className = "singleCardShow"),
          setCardText(projectsArr[numb].text),
          setUrl(projectsArr[numb].url)
        );
      }
    }

    // gets the correct project text

    e.currentTarget.lastChild.className = "singleCardShow";
    setCardText(projectsArr[numb].text);
    setUrl(projectsArr[numb].url);
  };

  return (
    <section id="projectsSection">
      <h2 id="projects">PROJECTS</h2>
      <div className="boxes">
        <div className="right"></div>
        <div className="left">
          <div className="projects">
            <div className="projectsDiv">
              <div
                id="0"
                className="pancakes pancakeContainer1"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={(e) => toggleCard(e)}
              >
                <img
                  className="pancake1"
                  src={require("../assets/img/pancake_01.jpg")}
                  alt="pancakes"
                />
                <div className="pancaketext pancaketext1">
                  <p className="pancakeP">PANCAKE I</p>
                </div>

                <SingleCard
                  active="singleCardHidden"
                  url={url}
                  text={cardText}
                />
              </div>

              <div
                id="1"
                className="pancakes pancakeContainer2"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={(e) => toggleCard(e)}
              >
                <img
                  className="pancake2"
                  src={require("../assets/img/pancake_02.jpg")}
                  alt="pancakes"
                />
                <div className="pancaketext pancaketext2">
                  <p className="pancakeP">PANCAKE II</p>
                </div>

                <SingleCard active="singleCardHidden" text={cardText} />
              </div>
              <div
                id="2"
                className="pancakes pancakeContainer3"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={(e) => toggleCard(e)}
              >
                <img
                  className="pancake3"
                  src={require("../assets/img/pancake_03.jpg")}
                  alt="pancakes"
                />
                <div className="pancaketext pancaketext3">
                  <p className="pancakeP">PANCAKE III</p>
                </div>

                <SingleCard active="singleCardHidden" text={cardText} />
              </div>

              <div
                id="3"
                className="pancakes pancakeContainer4"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={(e) => toggleCard(e)}
              >
                <img
                  className="pancake4"
                  src={require("../assets/img/table_01.jpg")}
                  alt="pancakes"
                />
                <div className="pancaketext pancaketext4">
                  <p className="pancakeP">PANCAKE IV</p>
                </div>

                <SingleCard active="singleCardHidden" text={cardText} />
              </div>

              <div
                id="4"
                className="pancakes pancakeContainer5"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={(e) => toggleCard(e)}
              >
                <img
                  className="pancake5"
                  src={require("../assets/img/table_01.jpg")}
                  alt="pancakes"
                />
                <div className="pancaketext pancaketext5">
                  <p className="pancakeP">PANCAKE V</p>
                </div>

                <SingleCard active="singleCardHidden" text={cardText} />
              </div>

              <div
                id="5"
                className="pancakes pancakeContainer6"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={(e) => toggleCard(e)}
              >
                <img
                  className="pancake6"
                  src={require("../assets/img/table_01.jpg")}
                  alt="pancakes"
                />
                <div className="pancaketext pancaketext6">
                  <p className="pancakeP">PANCAKE VI</p>
                </div>

                <SingleCard active="singleCardHidden" text={cardText} />
              </div>
            </div>
            {/* <!--- closing .projects__div --> */}
          </div>
          {/* <!--- closing .projects --> */}
        </div>
        {/* <!--- closing .right --> */}
      </div>
      {/* <!--- closing .boxes --> */}
    </section>
  );
};

export default Projects;
