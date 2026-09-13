import type { ComponentType, ReactNode } from "react";
import styles from "./Section.module.scss";

interface SectionProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  children: ReactNode;
}

export default function Section({ icon: Icon, title, children }: SectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <span className={styles.iconWrap} aria-hidden="true">
          <Icon className={styles.icon} />
        </span>
        <span>{title}</span>
      </h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
}