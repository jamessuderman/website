import React, { useEffect } from "react";
import styles from "./ResumeCard.module.css";

function ResumeCard({ company, time, title, list }) {
  let container;

  function handleClick() {
    container = document.getElementById(`${company}Container`);
    let cardTop = document.getElementById(`${company}Container`).offsetTop;
    let listEnd = document.getElementById(`${company}List`).lastChild.offsetTop;

    if (container.style.height === "160px") {
      container.style.height = `${listEnd + 60 - cardTop}px`;
    } else {
      container.style.height = "160px";
    }
  }

  useEffect(() => {
    let container = document.getElementById(`${company}Container`);
    let cardTop = document.getElementById(`${company}Container`).offsetTop;
    let listEnd = document.getElementById(`${company}List`).lastChild.offsetTop;

    container.style.height = `${listEnd + 60 - cardTop}px`;
  });

  return (
    <div
      id={`${company}Container`}
      className={styles.container}
      onClick={handleClick}
    >
      <div className={styles.companyContainer}>
        <h1>{company}</h1>
        <h3
          style={
            company === "Utica National Insurance Group"
              ? { color: "var(--primary)" }
              : { color: "white" }
          }
        >
          {time}
        </h3>
      </div>
      <h2 style={{ color: "var(--primary)" }}>{title}</h2>
      <ul id={`${company}List`}>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default ResumeCard;
