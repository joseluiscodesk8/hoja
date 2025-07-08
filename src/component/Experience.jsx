import { useEffect } from "react";
import styles from "../styles/index.module.scss";

const Experience = () => {
  useEffect(() => {
    const handIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.scrollVisible);
          entry.target.classList.remove(styles.scrollHidden);
        } else {
          entry.target.classList.remove(styles.scrollVisible);
          entry.target.classList.add(styles.scrollHidden);
        }
      });
    };
    const observer = new IntersectionObserver(handIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    const experiencia = document.querySelector(`.${styles.Experiencia}`);
    if (experiencia) {
      observer.observe(experiencia);
    }

    return () => {
      if (experiencia) {
        observer.unobserve(experiencia);
      }
    };
  }, []);

  return (
    <>
      <section className={styles.Experiencia}>
        <h2>Experience</h2>
        <p>
          Full-Stack Developer with 3+ years of experience building scalable web
          applications (Next.js, Nest.js, PostgreSQL). I combine development
          expertise with DevOps practices (CI/CD, infrastructure
          automation) to deliver high-performance solutions.
        </p>
      </section>
    </>
  );
};

export default Experience;
