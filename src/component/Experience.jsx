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
        Con casi tres años de experiencia en desarrollo frontend y un fuerte enfoque en fullstack, disfruto creando soluciones innovadoras dentro del sector tecnológico. Mi dedicación a la entrega oportuna y el desarrollo optimizado me han distinguido. Aprovechando Next.js y Nest.js, He impulsado aplicaciones de alto rendimiento y logrado resultados sobresalientes en proyectos anteriores.
        </p>
        <p>
          Desarrollador en <a href="https://codingsquad.co" target="blank">codingSquad</a> desde enero del 2023.
        </p>
      </section>
    </>
  );
};

export default Experience;
