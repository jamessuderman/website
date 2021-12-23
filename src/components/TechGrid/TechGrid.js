import React, { useEffect } from "react";
import styles from "./TechGrid.module.css";
import Angular from "../icons/Angular";
import Apple from "../icons/Apple";
import Azure from "../icons/Azure";
import Bootstrap from "../icons/Bootstrap";
import Css from "../icons/Css";
import Epi from "../icons/Epi";
import Git from "../icons/Git";
import Html from "../icons/Html";
import Java from "../icons/Java";
import Javascript from "../icons/Javascript";
import MySql from "../icons/MySql";
import Net from "../icons/Net";
import Node from "../icons/Node";
import REACT from "../icons/REACT";
import Spring from "../icons/Spring";
import SqlServer from "../icons/SqlServer";
import Windows from "../icons/Windows";

function TechGrid() {
  useEffect(() => {
    let icons = document.getElementsByClassName(styles.iconContainer);
    let meter = document.getElementById("knowledge");
    let name = document.getElementById("name");
    Array.from(icons).forEach((icon) => {
      icon.addEventListener("mouseenter", (e) => {
        switch (e.target.id) {
          case "apple":
            meter.style.width = "60%";
            name.innerHTML = "Apple";
            break;
          case "windows":
            meter.style.width = "50%";
            name.innerHTML = "Windows";
            break;
          case "git":
            meter.style.width = "70%";
            name.innerHTML = "Git";
            break;
          case "react":
            meter.style.width = "95%";
            name.innerHTML = "React";
            break;
          case "angular":
            meter.style.width = "60%";
            name.innerHTML = "Angular";
            break;
          case "javascript":
            meter.style.width = "80%";
            name.innerHTML = "Javascript";
            break;
          case "node":
            meter.style.width = "45%";
            name.innerHTML = "Node";
            break;
          case "bootstrap":
            meter.style.width = "90%";
            name.innerHTML = "Bootstrap";
            break;
          case "css":
            meter.style.width = "85%";
            name.innerHTML = "CSS";
            break;
          case "html":
            meter.style.width = "91%";
            name.innerHTML = "HTML";
            break;
          case "sqlserver":
            meter.style.width = "50%";
            name.innerHTML = "SQL Server";
            break;
          case "azure":
            meter.style.width = "40%";
            name.innerHTML = "Azure";
            break;
          case "net":
            meter.style.width = "65%";
            name.innerHTML = ".NET";
            break;
          case "epi":
            meter.style.width = "15%";
            name.innerHTML = "EpiServer";
            break;
          case "java":
            meter.style.width = "75%";
            name.innerHTML = "Java";
            break;
          case "spring":
            meter.style.width = "63%";
            name.innerHTML = "Spring";
            break;
          case "mysql":
            meter.style.width = "60%";
            name.innerHTML = "MySQL";
            break;
          default:
            break;
        }
      });
      icon.addEventListener("mouseleave", (e) => {
        meter.style.width = "0%";
        name.innerHTML = "";
      });
    });
  });

  return (
    <div className={styles.container}>
      <div id="name" className={styles.techName}></div>
      <div className={styles.meterContainer}>
        <div className={styles.meterBack}>
          <div id="knowledge" className={styles.meterBar}></div>
        </div>
      </div>
      <div className={styles.gridContainer}>
        <span id="apple" className={styles.iconContainer}>
          <Apple />
        </span>
        <span id="windows" className={styles.iconContainer}>
          <Windows />
        </span>
        <span id="git" className={styles.iconContainer}>
          <Git />
        </span>
        <span id="react" className={styles.iconContainer}>
          <REACT />
        </span>
        <span id="angular" className={styles.iconContainer}>
          <Angular />
        </span>
        <span id="javascript" className={styles.iconContainer}>
          <Javascript />
        </span>
        <span id="node" className={styles.iconContainer}>
          <Node />
        </span>
        <span id="bootstrap" className={styles.iconContainer}>
          <Bootstrap />
        </span>
        <span id="css" className={styles.iconContainer}>
          <Css />
        </span>
        <span id="html" className={styles.iconContainer}>
          <Html />
        </span>
        <span id="sqlserver" className={styles.iconContainer}>
          <SqlServer />
        </span>
        <span id="azure" className={styles.iconContainer}>
          <Azure />
        </span>
        <span id="net" className={styles.iconContainer}>
          <Net />
        </span>
        <span id="epi" className={styles.iconContainer}>
          <Epi />
        </span>
        <span id="java" className={styles.iconContainer}>
          <Java />
        </span>
        <span id="spring" className={styles.iconContainer}>
          <Spring />
        </span>
        <span id="mysql" className={styles.iconContainer}>
          <MySql />
        </span>
      </div>
    </div>
  );
}

export default TechGrid;
