"use client";

import dynamic from "next/dynamic";
import styles from "./page.module.scss";

const Header = dynamic(() => import("@/components/Header/Header"));
const ProfessionalSummary = dynamic(() =>
  import("@/components/ProfessionalSummary/ProfessionalSummary")
);
const Experience = dynamic(() => import("@/components/Experience/Experience"));
const Education = dynamic(() => import("@/components/Education/Education"));
const Sidebar = dynamic(() => import("@/components/Sidebar/Sidebar"), {
  loading: () => (
    <div className={styles.sidebarSkeleton} aria-hidden="true">
      <div className={styles.skeletonBlock} />
      <div className={styles.skeletonBlock} />
      <div className={styles.skeletonBlock} />
    </div>
  ),
});

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.body}>
        <main id="main" tabIndex={-1} className={styles.main}>
          <ProfessionalSummary />
          <Experience />
          <Education />
        </main>
        <Sidebar />
      </div>
    </div>
  );
}