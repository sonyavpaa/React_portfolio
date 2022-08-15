import React from "react";
import { Link } from "react-router-dom";

import "../style/Projects.css";
import "../style/Mobile.css";

const Projects = ({ onMouseEnter, onMouseLeave }) => {
  // hover effect for pancake desc text
  //   const pancakeTextHover = (e) => {
  //     e.target?.firstChild?.data;
  //     let header = e.target?.firstChild?.data;
  //     projectsText.innerHTML = `${header} </br>${header} description`;
  //     // for (let i = 0; i < headerArr.length; i++) {
  //     //   if (header == headerArr[i])
  //     //     projectsText.innerHTML = `${headerArr[i]} </br>${descArr[i]}`;
  //     // }
  //   };

  return (
    <section id="projectsSection">
      <h2 id="projects">PROJECTS</h2>
      <div className="boxes">
        <div className="right"></div>
        <div className="left">
          <div className="projects">
            <div className="projectsDiv">
              <div
                className="pancakes pancakeContainer1"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <Link to="/">
                  <img
                    className="pancake1"
                    src={require("../assets/img/pancake_01.jpg")}
                    alt="pancakes"
                  />
                  <div className="pancaketext pancaketext1">
                    <p>PANCAKE I</p>
                  </div>
                </Link>
                <div className="pancaketextDevice">
                  <p></p>
                </div>
              </div>

              <div
                className="pancakes pancakeContainer2"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <a>
                  <img
                    className="pancake2"
                    src={require("../assets/img/pancake_02.jpg")}
                    alt="pancakes"
                  />
                  <div className="pancaketext pancaketext2">
                    <p>PANCAKE II</p>
                  </div>
                </a>
                <div className="pancaketextDevice">
                  <p></p>
                </div>
              </div>

              <div
                className="pancakes pancakeContainer3"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <a>
                  <img
                    className="pancake3"
                    src={require("../assets/img/pancake_03.jpg")}
                    alt="pancakes"
                  />
                  <div className="pancaketext pancaketext3">
                    <p>PANCAKE III</p>
                  </div>
                </a>
                <div className="pancaketextDevice">
                  <p></p>
                </div>
              </div>

              <div
                className="pancakes pancakeContainer4"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <a>
                  <img
                    className="pancake4"
                    src={require("../assets/img/table_01.jpg")}
                    alt="pancakes"
                  />
                  <div className="pancaketext pancaketext4">
                    <p>PANCAKE IV</p>
                  </div>
                </a>
                <div className="pancaketextDevice">
                  <p></p>
                </div>
              </div>

              <div
                className="pancakes pancakeContainer5"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <a>
                  <img
                    className="pancake5"
                    src={require("../assets/img/table_01.jpg")}
                    alt="pancakes"
                  />
                  <div className="pancaketext pancaketext5">
                    <p>PANCAKE V</p>
                  </div>
                </a>
                <div className="pancaketextDevice">
                  <p></p>
                </div>
              </div>

              <div
                className="pancakes pancakeContainer6"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <a>
                  <img
                    className="pancake6"
                    src={require("../assets/img/table_01.jpg")}
                    alt="pancakes"
                  />
                  <div className="pancaketext pancaketext6">
                    <p>PANCAKE VI</p>
                  </div>
                </a>
                <div className="pancaketextDevice">
                  <p></p>
                </div>
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
