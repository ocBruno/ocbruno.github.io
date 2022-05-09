import React, { useState } from "react";
import "./EmailWidget.css";
import emailLogo from "./email-logo.png";

const recruitee = {
  name: "Bruno Costa",
};

const getEmailWidgetClassName = (isOpen: boolean) => {
  return isOpen
    ? "EmailWidget-container EmailWidget-open-style"
    : "EmailWidget-container EmailWidget-closed-style";
};

function EmailWidget() {
  const [isEmailWidgetOpen, setIsEmailWidgetOpen] = useState(false);
  return (
    <aside className={`${getEmailWidgetClassName(isEmailWidgetOpen)}`}>
      <button
        onClick={(e) => setIsEmailWidgetOpen(true)}
        className="Send-email-button"
      >
        <img
          className="Send-email-button-icon"
          src={emailLogo}
          alt="Email icon"
        />
        Email
      </button>
      <section className="Send-email-container">
        <button
          onClick={(e) => setIsEmailWidgetOpen(false)}
          className="Send-email-close-button"
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
          className="Send-email-form"
          action="mailto:contact@yourdomain.com"
          method="POST"
          encType="multipart/form-data"
          name="EmailForm"
        >
          <label htmlFor="Subject">Subject:</label>
          <input type="text" name="Subject" />
          <label htmlFor="Message">Message:</label>
          <textarea name="Message"></textarea>
          <input type="submit" value="Send" />
        </form>
      </section>
    </aside>
  );
}

export default EmailWidget;
