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
        <h2>About</h2>
        <p>
          Desarrollador frontend con una sólida comprensión de HTML, CSS
          JavaScript, junto con el conocimiento del marco de React Next.js, creo
          y diseño aplicaciones web receptivas, escalables y fáciles de
          usar.
        </p>
      </section>
    </>
  );
};

export default AboutMe;
