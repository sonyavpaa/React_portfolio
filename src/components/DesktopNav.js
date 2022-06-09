import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "../style/Nav.css";

const DesktopNav = () => {
  return (
    <nav className="desktopNav">
      <ul>
        <li>
          <Link to="/#">Home</Link>
        </li>
        <li>
          <Link to="/#projects">Projects</Link>
        </li>
        <li>
          <Link to="/#about_me">About Me</Link>
        </li>
        <li>
          <Link to="/#skills">Skills</Link>
        </li>
      </ul>
      <a className="gitHub" href="https://github.com/sonyavpaa">
        <img
          src={require("../assets/img/GitHub-Mark-Light-32px.png")}
          alt="gitHub-logo"
        />
      </a>
    </nav>
  );
};

export default DesktopNav;
