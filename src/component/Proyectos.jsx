import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/index.module.scss";

const Proyectos = () => {
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

    const api = document.querySelector(`.${styles.api}`);
    if (api) {
      observer.observe(api);
    }

    const briefcase = document.querySelector(`.${styles.briefcase}`);
    if (briefcase) {
      observer.observe(briefcase);
    }

    return () => {
      if (api) {
        observer.unobserve(api);
      }
      if (briefcase) {
        observer.unobserve(briefcase);
      }
    };
  }, []);

  return (
    <>
      <section className={`${styles.proyectos}`}>
        <h2>Proyectos</h2>
        <div className={`${styles.api} ${styles.scroollHidden}`}>
          <h4>API REST</h4>
          <p>
            Consumir una API REST de películas me permite acceder a datos
            actualizados y relevantes sobre películas, como información,
            calificaciones y detalles de lanzamiento. Utilizando los endpoints
            proporcionados por el API, puedo realizar solicitudes HTTP para
            obtener y mostrar dinámicamente estos datos en mi aplicación web.
          </p>
          <figure>
            <Link
              href={"https://joseluiscodesk8.github.io/movie-api/"}
              target="_blank"
            >
              <Image src="/movie_api.jpg" width={150} height={150} alt="img" />
            </Link>
          </figure>
          <div className={styles.container_icon}>
            <div className={styles.icon}>HTML5</div>
            <div className={styles.icon}>SCSS</div>
            <div className={styles.icon_js}>JavaScript</div>
          </div>
        </div>

        <div className={`${styles.briefcase} ${styles.scroollHidden}`}>
          <h3>Briefcase</h3>
          <p>
            Next.js ofrece una renderización eficiente del lado del servidor,
            generación de páginas estáticas y un desarrollo basado en
            componentes. Esto resulta en aplicaciones web rápidas, escalables y
            de alto rendimiento.
          </p>
          <figure>
            <Link href={"https://cvjoseluis.vercel.app/"} target="_blank">
              <Image
                src={"/maletin2 1.jpg"}
                width={150}
                height={150}
                alt="img"
              />
            </Link>
          </figure>
          <div className={styles.container_icon}>
            <div className={styles.icon}>Next.js</div>
            <div className={styles.icon}>SCSS</div>
            <div className={styles.icon_js}>Framer Motion</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Proyectos;
