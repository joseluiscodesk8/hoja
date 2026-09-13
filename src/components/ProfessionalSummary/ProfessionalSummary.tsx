"use client";

import { FiUser } from "react-icons/fi";
import Section from "@/components/Section/Section";
import { summary } from "@/data/cv";
import styles from "./ProfessionalSummary.module.scss";

export default function ProfessionalSummary() {
  return (
    <Section icon={FiUser} title="Professional Summary">
      <p className={styles.summary}>{summary}</p>
    </Section>
  );
}