import { FiGlobe } from "react-icons/fi";
import Section from "@/components/Section/Section";
import { languages } from "@/data/cv";
import styles from "./Languages.module.scss";

export default function Languages() {
  return (
    <Section icon={FiGlobe} title="Languages">
      <ul className={styles.list}>
        {languages.map((language) => (
          <li key={language.name} className={styles.language}>
            <span className={styles.name}>{language.name}</span>
            <span className={styles.level}>{language.level}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}