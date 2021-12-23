import React from "react";
import styles from "./ContactSection.module.css";

function ContactSection() {
  return (
    <div id="contactSection" className={styles.container}>
      <div className={styles.contactContainer}>
        <div className={styles.titleContainer}>
          <div className="heroTitle">
            <span>Contact</span>
          </div>
        </div>
        <div className={styles.content}>
          <h1>jamessuderman@gmail.com</h1>
          <h1>https://github.com/jamessuderman</h1>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
