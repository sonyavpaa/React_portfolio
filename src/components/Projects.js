import React, { useState } from "react";

import Pancake from "./Pancake";

import "../style/Projects.css";
// import "../style/Responsive.css";

import { projectsArr } from "../assets/projectsAPI";
import { pancakeArr } from "../assets/imgAPI";
import { BrowserView } from "react-device-detect";

const Projects = ({ onMouseEnter, onMouseLeave }) => {
  const [popUpCardText, setCardText] = useState("");
  const [url, setUrl] = useState("");
  const [src, setSrc] = useState("");

  const toggleCard = (e) => {
    let numb = parseInt(e.currentTarget.id);

    e.currentTarget.children[1].style = "opacity:0";
    if (document.querySelector(".pancakesFilterOff")) {
      document
        .querySelectorAll(".pancakesFilterOff")
        .forEach(
          (item) => (item.className = `pancakes pancakeContainer${numb}`)
        );
    }

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
    // closes possible earlier opened cards
    if (document.querySelector(".singleCardShow")) {
      document.querySelector(".singleCardShow").className = "singleCardHidden";
      if (e.currentTarget.lastChild.className === "singleCardHidden") {
        return (
          (e.currentTarget.lastChild.className = "singleCardShow"),
          setCardText(projectsArr[numb].text),
          setUrl(projectsArr[numb].url),
          setSrc(projectsArr[numb].src)
        );
      }
    }

    // gets the correct project text
    e.currentTarget.lastChild.className = "singleCardShow";

    setCardText(projectsArr[numb].text);
    setUrl(projectsArr[numb].url);
    setSrc(projectsArr[numb].src);
  };

  return (
    <section id="projectsSection">
      <h2 id="projects">PROJECTS</h2>
      <div className="boxes">
        <BrowserView className="right"></BrowserView>
        <div className="left">
          <div className="projects">
            <div className="projectsDiv">
              <Pancake
                id="0"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                click={(e) => toggleCard(e)}
                idRoman="I"
                popUpHidden="singleCardHidden"
                url={url}
                popUpCardText={popUpCardText}
                img={pancakeArr[1].img}
                src={src}
              />

              <Pancake
                id="1"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                click={(e) => toggleCard(e)}
                idRoman="II"
                popUpHidden="singleCardHidden"
                url={url}
                popUpCardText={popUpCardText}
                img={pancakeArr[0].img}
              />

              <Pancake
                id="2"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                click={(e) => toggleCard(e)}
                idRoman="III"
                popUpHidden="singleCardHidden"
                url={url}
                popUpCardText={popUpCardText}
                img={pancakeArr[0].img}
              />

              <Pancake
                id="3"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                click={(e) => toggleCard(e)}
                idRoman="IV"
                popUpHidden="singleCardHidden"
                url={url}
                popUpCardText={popUpCardText}
                img={pancakeArr[0].img}
              />

              <Pancake
                id="4"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                click={(e) => toggleCard(e)}
                idRoman="V"
                popUpHidden="singleCardHidden"
                url={url}
                popUpCardText={popUpCardText}
                img={pancakeArr[0].img}
              />

              <Pancake
                id="5"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                click={(e) => toggleCard(e)}
                idRoman="VI"
                popUpHidden="singleCardHidden"
                url={url}
                popUpCardText={popUpCardText}
                img={pancakeArr[0].img}
              />
            </div>
            {/* <!--- closing .projectsDiv --> */}
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
