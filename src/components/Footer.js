import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>Copyright Sonya Web 2022</p>
        <a
          className="link"
          href="https://www.flaticon.com/free-icons/adobe"
          title="adobe icons"
        >
          Adobe icons created by riajulislam - Flaticon
        </a>
        &nbsp;||&nbsp;
        <a
          className="link"
          href="https://www.flaticon.com/free-icons/css"
          title="css icons"
        >
          Css & Html icons created by Pixel perfect - Flaticon
        </a>
        &nbsp;||&nbsp;
        <a
          className="link"
          href="https://www.flaticon.com/free-icons/js"
          title="js icons"
        >
          Js, React and Php icons created by Freepik - Flaticon
        </a>
      </div>
    </footer>
  );
};

export default Footer;
