import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import type { Project } from "@/data/cv";
import styles from "./ProjectCard.module.scss";

const tones: Record<Project["tone"], string> = {
  teal: styles.toneTeal,
  amber: styles.toneAmber,
  rose: styles.toneRose,
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={`${styles.logoWrap} ${tones[project.tone]}`}>
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          width={72}
          height={72}
          sizes="72px"
          quality={60}
          loading="lazy"
          decoding="async"
          className={styles.logo}
        />
      </div>
      <div className={styles.body}>
        <h4 className={styles.name}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {project.name}
            <span className="sr-only"> (opens in a new tab)</span>
            <FiExternalLink className={styles.extIcon} aria-hidden="true" />
          </a>
        </h4>
        <p className={styles.description}>{project.description}</p>
      </div>
    </article>
  );
}