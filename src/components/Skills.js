import React from "react";

import "../style/Skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <h2 id="skills">SKILLS</h2>
      <div className="skillsDivCenter">
        <div className="skillsDiv">
          <p>
            Besides web dev studies, I do photography and some other artsy stuff
            when ever I can. Here's the languages and software I am working
            with:
          </p>

          <div className="skillsIcons">
            <img src={require("../assets/img/react.png")} alt="react" />
            <img
              src={require("../assets/img/adobe-photoshop.png")}
              alt="photoshop"
            />
            <img src={require("../assets/img/indesign.png")} alt="indesign" />
            <img src={require("../assets/img/css.png")} alt="css" />
            <img src={require("../assets/img/html-5.png")} alt="html" />
            <img src={require("../assets/img/js.png")} alt="javascript" />
            <img src={require("../assets/img/php.png")} alt="php" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
