import React, { useState, useEffect } from "react";
import styles from "./ControlBar.module.css";
import { setColor } from "../../Utilities/Utilities";
import { CirclePicker } from "react-color";

function ControlBar() {
  const [displayPicker, setDisplayPicker] = useState(false);

  function handleClick() {
    setDisplayPicker(!displayPicker);
  }

  function handleChange(color) {
    if (
      color.hex === "#f44336" ||
      color.hex === "#e91e63" ||
      color.hex === "#9c27b0" ||
      color.hex === "#673ab7" ||
      color.hex === "#3f51b5" ||
      color.hex === "#009688" ||
      color.hex === "#4caf50" ||
      color.hex === "#ff5722" ||
      color.hex === "#2196f3" ||
      color.hex === "#607d8b" ||
      color.hex === "#795548"
    ) {
      setColor("contrastText", "white");
    } else {
      setColor("contrastText", "var(--dark)");
    }

    setColor("primary", color.hex);
  }

  function underlineHandler(e) {
    let underline = document.getElementById("underline");
    let contactPosition = document.getElementById("contactSection").offsetTop;
    let resumePosition = document.getElementById("resumeSection").offsetTop;

    switch (e.target.id) {
      case "home":
        underline.style.left = "102px";
        window.scroll({ top: 0, behavior: "smooth" });
        break;
      case "resume":
        underline.style.left = "206px";
        window.scroll({ top: resumePosition, behavior: "smooth" });
        break;
      case "contact":
        underline.style.left = "317px";
        window.scroll({ top: contactPosition, behavior: "smooth" });
        break;
      default:
        break;
    }
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  useEffect(() => {
    let underline = document.getElementById("underline");
    let resumePosition = document.getElementById("resumeSection").offsetTop;
    let contactSection = document.getElementById("contactSection");
    window.addEventListener("scroll", () => {
      let position = window.scrollY;
      if (position < resumePosition - 50) {
        underline.style.left = "102px";
      }
      if (position > resumePosition - 50) {
        underline.style.left = "205px";
      }
      if (isInViewport(contactSection)) {
        underline.style.left = "317px";
      }
    });
  });

  return (
    <div id="bar" className={styles.container}>
      <div className={styles.barLeft}>
        <svg
          className={styles.logo}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 65 100"
        >
          <path
            d="M47.55 0H75.00999999999999V100H47.55z"
            transform="matrix(.95 0 0 .97216 -10.06 1.392) matrix(.97376 0 0 .97376 1.176 1.312)"
          ></path>
          <path
            d="M47.55 0H75.00999999999999V100H47.55z"
            transform="matrix(.95 0 0 .97216 -10.06 1.392) matrix(.97376 0 0 .52967 -30.919 45.72)"
          ></path>
        </svg>
        <span id="home" onClick={underlineHandler}>
          Home
        </span>
        <span id="resume" onClick={underlineHandler}>
          Resume
        </span>
        <span id="contact" onClick={underlineHandler}>
          Contact
        </span>
        <div id="underline" className={styles.underline}></div>
      </div>
      <span className={styles.settings} onClick={handleClick}>
        {!displayPicker ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </span>
      {displayPicker && (
        <div className={styles.picker}>
          <CirclePicker onChange={handleChange} />
        </div>
      )}
    </div>
  );
}

export default ControlBar;
