import { useEffect } from "react";
import styles from "../styles/index.module.scss";

const AboutMe = () => {
  useEffect(() => {
    const handIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.scrollVisible);
          entry.target.classList.remove(styles.scroollHidden);
        } else {
          entry.target.classList.remove(styles.scrollVisible);
          entry.target.classList.add(styles.scroollHidden);
        }
      });
    };
    const observer = new IntersectionObserver(handIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    const AboutMe = document.querySelector(`.${styles.AboutMe}`);
    if (AboutMe) {
      observer.observe(AboutMe);
    }

    return () => {
      if (AboutMe) {
        observer.unobserve(AboutMe);
      }
    };
  }, []);
  return (
    <>
      <section className={styles.AboutMe}>
        <h2>ABOUT</h2>
        <p>
          Desarrollador frontend y una sólida comprensión de HTML, CSS y
          JavaScript, junto con el conocimiento en marcos como React, soy
          experto en crear y diseñar aplicaciones web receptivas, escalables y
          fáciles de usar.
        </p>
      </section>
    </>
  );
};

export default AboutMe;
