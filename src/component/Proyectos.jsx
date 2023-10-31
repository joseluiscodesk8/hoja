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

    const agagem = document.querySelector(`.${styles.agagem}`);
    if (agagem) {
      observer.observe(agagem);
    }

    const api = document.querySelector(`.${styles.api}`);
    if (api) {
      observer.observe(api);
    }

    const briefcase = document.querySelector(`.${styles.briefcase}`);
    if (briefcase) {
      observer.observe(briefcase);
    }

    const slider = document.querySelector(`.${styles.slider}`);
    if (slider) {
      observer.observe(slider);
    }

    const faster = document.querySelector(`.${styles.faster}`);
    if (faster) {
      observer.observe(faster);
    }

    return () => {
      if (agagem) {
        observer.unobserve(agagem);
      }
      if (api) {
        observer.unobserve(api);
      }
      if (briefcase) {
        observer.unobserve(briefcase);
      }
      if (slider) {
        observer.observe(slider);
      }
      if (faster) {
        observer.observe(faster);
      }
    };
  }, []);

  return (
    <>
      <section className={`${styles.proyectos}`}>
        <h2>Proyectos</h2>
        
        <section className={`${styles.agagem} ${styles.scroollHidden}`}>
          <b></b>
          <h4>e-Commerce</h4>
          <p>
          Una plataforma de comercio electrónico robusta y eficiente creada con Next.js y Nest.js. Esta tienda en línea combina la potencia del rendimiento del lado del cliente de Next.js con la escalabilidad y modularidad del lado del servidor de Nest.js. Ofrece una experiencia de usuario fluida y altamente receptiva, respaldada por una arquitectura backend segura y flexible.
          </p>
          <figure>
            <Link
              href={"https://agagem.vercel.app/"}
              target="_blank"
            >
              <Image src="/agagem.jpg" width={200} height={100} alt="img" />
            </Link>
          </figure>
          <div className={styles.container_icon}>
            <div className={styles.icon}>NEXT.JS</div>
            <div className={styles.icon}>SASS</div>
            <div className={styles.icon}>NEST.JS</div>
          </div>
        </section>

        <section className={`${styles.engie} ${styles.scroollHidden}`}>
          <h4>Redesign</h4>
          <p>
          Un impresionante rediseño del sitio web de ingeniería, construido con Next.js, que eleva la experiencia del usuario a nuevas alturas. Con una interfaz intuitiva y dinámica, esta página ofrece información técnica detallada de manera clara y accesible. La tecnología avanzada de Next.js garantiza una carga rápida y una navegación sin problemas, transformando la forma en que los visitantes interactúan con el mundo de la ingeniería en línea.
          </p>
          <figure>
            <Link
              href={"https://engineer-seven.vercel.app/"}
              target="_blank"
            >
              <Image src="/engie.jpg" width={200} height={100} alt="img" />
            </Link>
          </figure>
          <div className={styles.container_icon}>
            <div className={styles.icon}>NEXT.JS</div>
            <div className={styles.icon}>SASS</div>
            <div className={styles.icon_js}>Responsive</div>
          </div>
        </section>

        <section className={`${styles.api} ${styles.scroollHidden}`}>
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
            <div className={styles.icon}>SASS</div>
            <div className={styles.icon_js}>JavaScript</div>
          </div>
        </section>

        <section className={`${styles.briefcase} ${styles.scroollHidden}`}>
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
                width={200}
                height={100}
                alt="img"
              />
            </Link>
          </figure>
          <div className={styles.container_icon}>
            <div className={styles.icon}>Next.js</div>
            <div className={styles.icon}>SASS</div>
            <div className={styles.icon_js}>Framer Motion</div>
          </div>
        </section>

        <section className={`${styles.slider} ${styles.scroollHidden}`}>
          <h3>Slider</h3>
          <p>
            Trabajar con Next.js y la librería Swiper ofrece beneficios como el
            renderizado eficiente del lado del servidor, un enrutamiento
            sencillo y optimizado, así como la capacidad de crear carousels y
            sliders interactivos de manera fácil y personalizable. Además,
            Next.js proporciona un rendimiento mejorado y Swiper ofrece una
            navegación táctil intuitiva y efectos visuales atractivos.
          </p>
          <figure>
            <Link
              href={"https://titles-app-joseluis.vercel.app/"}
              target="_blank"
            >
              <Image src={"/slider.jpg"} width={200} height={100} alt="img" />
            </Link>
          </figure>
          <div className={styles.container_icon}>
            <div className={styles.icon}>Next.js</div>
            <div className={styles.icon}>SASS</div>
            <div className={styles.icon_js}>Swiper</div>
          </div>
        </section>

        <section className={`${styles.faster} ${styles.scroollHidden}`}>
          <h3>Faster</h3>
          <p>
            Faster es una aplicación de moto taxi diseñada para conductores,
            desarrollada con Next.js. La aplicación permite a los conductores
            registrarse y proporcionar servicios de transporte en moto de manera
            eficiente.
          </p>
          <figure>
            <Link href={"https://faster.vercel.app/"} target="_blank">
              <Image src={"/faster.jpg"} width={200} height={100} alt="img" />
            </Link>
          </figure>
          <div className={styles.container_icon}>
            <div className={styles.icon}>Next.js</div>
            <div className={styles.icon}>SASS</div>
            <div className={styles.icon_js}>Express</div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Proyectos;
