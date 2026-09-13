"use client";

import { HiAcademicCap } from "react-icons/hi";
import Section from "@/components/Section/Section";
import { education } from "@/data/cv";
import styles from "./Education.module.scss";

export default function Education() {
  return (
    <Section icon={HiAcademicCap} title="Education">
      <ul className={styles.list}>
        {education.map((item) => (
          <li key={`${item.institution}-${item.period}`} className={styles.row}>
            <div className={styles.info}>
              <span className={styles.institution}>{item.institution}</span>
              <span className={styles.program}>{item.program}</span>
            </div>
            {item.period ? (
              <span className={styles.period}>{item.period}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}