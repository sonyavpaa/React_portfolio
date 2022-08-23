import React, { useState } from "react";
import "../style/Intro.css";

const Intro = ({ getName }) => {
  const [showWelcome, setShowWelcome] = useState("welcomeTextContainer");

  // animation for the welcome text after name input recieved
  let userName = "";
  const userNameInput = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        userName = e.target.value;
        e.target.className = "hide";
        getName(e);

        // helloName.textContent = e.target.value;
        // userNameInput.classList.add("hide");
        // userNameInput.value = "";
        welcomeTextAnimate();
      }
    }
  };

  const welcomeTextAnimate = async () => {
    const welcomeTextContainer = document.querySelector(
      ".welcomeTextContainer"
    );
    await setShowWelcome("welcomeTextContainer show");
    console.log("here", welcomeTextContainer);
    type();
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

  return (
    <>
      <section className="introSection">
        <h1>PANCAKE PORTFOLIO</h1>
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
      </section>
    </>
  );
};

export default Intro;
