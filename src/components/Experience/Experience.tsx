"use client";

import { FiBriefcase } from "react-icons/fi";
import Section from "@/components/Section/Section";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { jobs } from "@/data/cv";
import styles from "./Experience.module.scss";

export default function Experience() {
  return (
    <Section icon={FiBriefcase} title="Experience">
      {jobs.map((job) => (
        <article key={`${job.title}-${job.period}`} className={styles.job}>
          <h3 className={styles.jobTitle}>
            {job.title}
            {job.company ? ` · ${job.company}` : ""}
          </h3>
          <p className={styles.jobMeta}>
            {job.period}
            {job.modality ? ` | ${job.modality}` : ""}
          </p>

          {job.descriptions?.map((paragraph) => (
            <p key={paragraph} className={styles.jobDescription}>
              {paragraph}
            </p>
          ))}

          {job.projects?.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}

          {job.bullets && job.bullets.length > 0 && (
            <ul className={styles.bullets}>
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </Section>
  );
}