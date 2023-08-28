import { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/index.module.scss";

const Experience = () => {
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

    const Experiencia = document.querySelector(`.${styles.Experiencia}`);
    if (Experiencia) {
      observer.observe(Experiencia);
    }

    return () => {
      if (Experiencia) {
        observer.unobserve(Experiencia);
      }
    };
  }, []);
  return (
    <>
      <section className={styles.Experiencia}>
        <h2>Experiencia</h2>
        <p>
        Desarrollador frontend con profundos conocimientos en HTML, CSS y JavaScript, respaldados por una experiencia fluida en el marco React, Next.js. Diseño y desarrollo de aplicaciones web receptivas, escalables y altamente intuitivas para garantizar experiencias de usuario excepcionales.
        </p>
      </section>
    </>
  );
};

export default Experience;
