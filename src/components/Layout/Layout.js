import React from "react";
import styles from "./Layout.module.css";
import ControlBar from "../ControlBar/ControlBar";
import PortraitHero from "../PortraitHero/PortraitHero";
import UxSection from "../UxSection/UxSection";
import FullstackSection from "../FullstackSection/FullstackSection";
import TechGrid from "../TechGrid/TechGrid";
import ResumeSection from "../ResumeSection/ResumeSection";
import ContactSection from "../ContactSection/ContactSection";

function Layout() {
  return (
    <div className={styles.container}>
      <ControlBar />
      <PortraitHero />
      <UxSection />
      <FullstackSection />
      <TechGrid />
      <ResumeSection />
      <ContactSection />
    </div>
  );
}

export default Layout;
