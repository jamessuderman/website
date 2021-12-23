import React from "react";
import styles from "./PortraitHero.module.css";

function PortraitHero() {
  return (
    <div className={styles.container}>
      <div>
        <div className="heroTitle" style={{ color: "var(--lightGrey)" }}>
          James
        </div>
        <div className="heroTitle">Suderman</div>
      </div>
      <div className={styles.heroText}>
        My name is James Suderman. I am a software developer from Fort Worth,
        Texas. My expertise is in Enterprise Web Applications. My speicalty is
        Front-End development with am emphasis on UI/UX.
      </div>
      <button>More Info</button>
    </div>
  );
}

export default PortraitHero;
