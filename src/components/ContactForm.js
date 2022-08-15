import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "../style/ContactForm.css";

const ContactForm = () => {
  const form = useRef();

  //submitting message
  const submitForm = (e) => {
    e.preventDefault();
    const button = document.getElementById("button");
    button.classList.add("loading");
    button.disabled = true;
    console.log(e);
    emailjs
      .sendForm(
        "service_h655ukq",
        "template_uei4rzs",
        form.current,
        "OYsUsvoEKPEh9Bx3k"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          button.classList.remove("loading");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contactform">
      <div className="contactformWrapper">
        <h2 id="contact">SAY HI</h2>
        <h3>Tell me your deepest fears</h3>

        <div className="contactformDiv">
          <form id="contactform" ref={form} onSubmit={submitForm}>
            <input
              type="text"
              placeholder="Your name"
              id="name"
              name="user_name"
            />

            <input
              type="email"
              placeholder="Your email"
              id="email"
              name="user_email"
            />

            <textarea
              name="message"
              placeholder="Your stories"
              rows="10"
            ></textarea>
            <button type="submit" id="button">
              <span>Send it!</span>

              {/* loading circle */}
              <svg
                aria-hidden="true"
                focusable="false"
                className="loader loading"
                viewBox="0 0 38 38"
              >
                <g
                  transform="translate(2 2)"
                  stroke="currentColor"
                  strokeWidth="4"
                  fillRule="evenodd"
                >
                  <circle
                    className="st0"
                    strokeOpacity=".5"
                    cx="17"
                    cy="17"
                    r="16.5"
                  ></circle>
                  <path
                    className="st1"
                    d="M33.5 17C33.5 7.9 26.1.5 17 .5"
                    transform="rotate(249.767 17 17)"
                  >
                    <animateTransform
                      accumulate="none"
                      additive="replace"
                      attributeName="transform"
                      calcMode="linear"
                      dur="1s"
                      from="0 17 17"
                      repeatCount="1"
                      restart="always"
                      to="360 17 17"
                      type="rotate"
                    ></animateTransform>
                  </path>
                </g>
              </svg>
              {/* loading circle */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
