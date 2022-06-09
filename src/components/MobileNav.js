import React from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <nav className="mobileNav">
      <ul>
        <a className="mobileNavIcon">
          <span className="material-icons"> menu </span>
        </a>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about_me">About Me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
