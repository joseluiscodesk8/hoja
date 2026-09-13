"use client";

import styles from "./Sidebar.module.scss";
import CoreCompetencies from "./CoreCompetencies/CoreCompetencies";
import TechnicalSkills from "./TechnicalSkills/TechnicalSkills";
import Languages from "./Languages/Languages";
import SoftSkills from "./SoftSkills/SoftSkills";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <CoreCompetencies />
      <TechnicalSkills />
      <Languages />
      <SoftSkills />
    </aside>
  );
}