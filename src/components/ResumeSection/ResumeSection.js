import React from "react";
import styles from "./ResumeSection.module.css";
import { utica, geo, inspirus } from "../../Constants/jobsLists";
import ResumeCard from "./ResumeCard/ResumeCard";
import ChartSection from "../ChartSection/ChartSection";

function ResumeSection() {
  return (
    <div id="resumeSection" className={styles.container}>
      <div className="heroTitle">
        <span>Experience</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <ResumeCard
        company="Utica National Insurance Group"
        time="Current"
        title="Web Applications Developer III"
        list={utica}
      />
      <ResumeCard
        company="GEODynamics"
        time="2017 - 2021"
        title="Software Engineer"
        list={geo}
      />
      <ResumeCard
        company="Inspirus"
        time="2015 - 2017"
        title="Java Developer/QA Analyst II"
        list={inspirus}
      />

      <ChartSection />
    </div>
  );
}

export default ResumeSection;
