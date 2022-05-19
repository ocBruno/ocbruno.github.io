import React, { useState } from "react";
import "./EmailWidget.css";
import emailLogo from "./email-logo.png";

const getEmailWidgetClassName = (isOpen: boolean) => {
  return isOpen
    ? "EmailWidgetContainer EmailWidgetOpenStyle"
    : "EmailWidgetContainer EmailWidgetClosedStyle";
};

function EmailWidget() {
  const [isEmailWidgetOpen, setIsEmailWidgetOpen] = useState(false);
  return (
    <aside className={`${getEmailWidgetClassName(isEmailWidgetOpen)}`}>
      <button
        onClick={(e) => setIsEmailWidgetOpen(true)}
        className="SendEmailButton"
      >
        <img className="SendEmailButtonIcon" src={emailLogo} alt="Email icon" />
      </button>
      <section className="SendEmailContainer">
        <button
          onClick={(e) => setIsEmailWidgetOpen(false)}
          className="SendEmailCloseButton"
        >
          <svg
            viewBox="0 0 12 12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="11"
              x2="11"
              y2="1"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="1"
              y1="1"
              x2="11"
              y2="11"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </button>
        <form
          className="SendEmailForm"
          action="mailto:contact@yourdomain.com"
          method="POST"
          encType="multipart/form-data"
          name="EmailForm"
        >
          <label htmlFor="Subject">Subject</label>
          <input type="text" name="Subject" className="SendEmailFormInput" />
          <label htmlFor="Message">Message</label>
          <textarea name="Message" className="SendEmailFormInput"></textarea>
          <input className="SendButton" type="submit" value="Send" />
        </form>
      </section>
    </aside>
  );
}

export default EmailWidget;
