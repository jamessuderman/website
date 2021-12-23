import React, { useEffect } from "react";
import styles from "./ChartSection.module.css";

function ChartSection() {
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
    window.addEventListener("scroll", () => {
      let client = document.getElementById("client");
      let server = document.getElementById("server");
      let mobile = document.getElementById("mobile");
      let embed = document.getElementById("embed");
      let os = document.getElementById("os");

      if (isInViewport(os)) {
        client.style.width = "75%";
        server.style.width = "60%";
        mobile.style.width = "65%";
        embed.style.width = "30%";
        os.style.width = "40%";
      } else {
        client.style.width = "0%";
        server.style.width = "0%";
        mobile.style.width = "0%";
        embed.style.width = "0%";
        os.style.width = "0%";
      }
    });
  });

  return (
    <div className={styles.container}>
      <div className={styles.barContainer}>
        <span className={styles.title}>Client</span>
        <div id="client" className={styles.bar}></div>
      </div>
      <div className={styles.barContainer}>
        <span className={styles.title}>Server</span>
        <div id="server" className={styles.bar}></div>
      </div>
      <div className={styles.barContainer}>
        <span className={styles.title}>Mobile</span>
        <div id="mobile" className={styles.bar}></div>
      </div>
      <div className={styles.barContainer}>
        <span className={styles.title}>Embedded</span>
        <div id="embed" className={styles.bar}></div>
      </div>
      <div className={styles.barContainer}>
        <span className={styles.title}>OS</span>
        <div id="os" className={styles.bar}></div>
      </div>
    </div>
  );
}

export default ChartSection;
