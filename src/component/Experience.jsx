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
          Desarrollador web freelance apasionado conhabilidades sólidas en HTML,CSS,
          JavaScript,React y Next.js. Creo experiencias digitales excepciona lesy
          escalables para clientes en busca de soluciones innovadoras..`
        </p>
      </section>
    </>
  );
};

export default Experience;
