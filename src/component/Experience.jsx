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
          A través de estos proyectos, he adquirido habilidades técnicas y de
          gestión. Me ha permitido enfrentar desafíos por mi cuenta y
          desarrollar mi autonomía. Los proyectos personales también me han
          ayudado a construir un portafolio sólido y a demostrar mi pasión por
          el desarrollo
        </p>
      </section>
    </>
  );
};

export default Experience;
