import { FiCode } from "react-icons/fi";
import Section from "@/components/Section/Section";
import { technicalSkills } from "@/data/cv";
import styles from "./TechnicalSkills.module.scss";

export default function TechnicalSkills() {
  return (
    <Section icon={FiCode} title="Technical Skills">
      <ul className={styles.list}>
        {technicalSkills.map((group) => (
          <li key={group.group} className={styles.group}>
            <span className={styles.groupTitle}>{group.group}</span>
            <p className={styles.groupItems}>{group.items}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}