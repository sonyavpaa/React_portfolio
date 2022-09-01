import React, { useState } from "react";
import "../style/Intro.css";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const Intro = ({ getName }) => {
  const [showWelcome, setShowWelcome] = useState("welcomeTextContainer");
  const [showWelcomeResponsive, setShowWelcomeResponsive] = useState(
    "welcomeTextContainerResponsive"
  );

  // animation for the welcome text after name input recieved
  let userName = "";
  const userNameInput = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        userName = e.target.value;

        e.target.className = "hide";
        getName(e);
        welcomeTextAnimate();
      }
    }
  };

  const welcomeTextAnimate = async () => {
    if (isBrowser) {
      await setShowWelcome("welcomeTextContainer show");
      type();
    }
    if (isMobile) {
      await setShowWelcomeResponsive("welcomeTextContainerResponsive show");
      typeResponsive();
    }
  };

  let charIndex = 0;
  const type = () => {
    let welcomeText = document.querySelector(".welcomeText");
    let welcomeTextAnimation = `Hi there ${userName}! Welcome to Sonya Web! Let scroll down to see my pancakes!`;
    const typingDelay = 100;
    if (charIndex < welcomeTextAnimation.length) {
      welcomeText.textContent += welcomeTextAnimation[charIndex];
      charIndex++;
      setTimeout(type, typingDelay);
    }
  };

  const typeResponsive = () => {
    let welcomeText = document.querySelector(".welcomeTextResponsive");
    let welcomeTextAnimation = `Hi there ${userName}! Welcome to Sonya Web!`;
    const typingDelay = 100;
    if (charIndex < welcomeTextAnimation.length) {
      welcomeText.textContent += welcomeTextAnimation[charIndex];
      charIndex++;
      setTimeout(typeResponsive, typingDelay);
    }
  };

  return (
    <>
      <section className="introSection">
        <h1>PANCAKE PORTFOLIO</h1>
        <BrowserView>
          <div className="welcomeContainer">
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="whats your name, my dear?"
              onKeyUp={userNameInput}
            />

            <div className={showWelcome}>
              <p className="welcomeText"></p>
            </div>
          </div>
        </BrowserView>
        <MobileView>
          <div className="welcomeContainerResponsive">
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="how may i call you, my dear?"
              onKeyUp={userNameInput}
            />
            <div className={showWelcomeResponsive}>
              <p className="welcomeTextResponsive"></p>
            </div>
          </div>
        </MobileView>
      </section>
    </>
  );
};

export default Intro;
