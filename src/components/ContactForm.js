import React from "react";

import "../style/ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contactform">
      <div className="contactformWrapper">
        <h2 id="contact">SAY HI</h2>
        <h3>Tell me your deepest fears</h3>

        <div className="contactformDiv">
          <form id="contactform" action="URL">
            <input type="text" placeholder="Your name" id="name" />

            <input type="email" placeholder="Your email" id="email" />

            <textarea
              name="message"
              placeholder="Your stories"
              rows="10"
            ></textarea>
            <input type="submit" id="button" value="Send it!" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
