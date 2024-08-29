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

    const axiora = document.querySelector(`.${styles.axiora}`);
    if (axiora) {
      observer.observe(axiora);
    }

    const Megumi = document.querySelector(`.${styles.Megumi}`);
    if (Megumi) {
      observer.observe(Megumi);
    }

    const Joyeria = document.querySelector(`.${styles.Joyeria}`);
    if (Joyeria) {
      observer.observe(Joyeria);
    }

    const faster = document.querySelector(`.${styles.faster}`);
    if (faster) {
      observer.observe(faster);
    }

    return () => {
      if (agagem) {
        observer.unobserve(agagem);
      }
      if (axiora) {
        observer.unobserve(axiora);
      }
      if (Megumi) {
        observer.unobserve(Megumi);
      }
      if (Joyeria) {
        observer.observe(Joyeria);
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
          <h4>Agagem</h4>
          <p>
          Una plataforma de comercio electrónico robusta y eficiente creada con Next.js y Nest.js. Esta tienda en línea combina la potencia del rendimiento del lado del cliente de Next.js con la escalabilidad y modularidad del lado del servidor de Nest.js. Ofrece una experiencia de usuario fluida y altamente receptiva, respaldada por una arquitectura backend segura y flexible.
          </p>
          <p>Full Stack</p>
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
          <h4>Enginectra</h4>
          <p>
          Un impresionante rediseño del sitio web de ingeniería, construido con Next.js, que eleva la experiencia del usuario a nuevas alturas. Con una interfaz intuitiva y dinámica, esta página ofrece información técnica detallada de manera clara y accesible. La tecnología avanzada de Next.js garantiza una carga rápida y una navegación sin problemas, transformando la forma en que los visitantes interactúan con el mundo de la ingeniería en línea.
          </p>
          <p>Front-end</p>
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

        <section className={`${styles.axiora} ${styles.scroollHidden}`}>
          <h4>Axiora</h4>
          <p>
          En el desarrollo de Axiora, me enfoqué en la arquitectura de la aplicación, la integración de API, y la implementación de funciones interactivas, utilizando herramientas como Next.js, Node.js, Nest.js y PostgreSQL. Además, trabajé estrechamente con el equipo de diseño para asegurar que cada elemento visual y funcional estuviera alineado con los objetivos del proyecto.
          </p>
          <p>Full Stack</p>
          <figure>
            <Link
              href={"https://axiora.vercel.app/"}
              target="_blank"
            >
              <Image src="/axiora.jpg" width={150} height={150} alt="img" />
            </Link>
          </figure>
          <div className={styles.container_icon}>
            <div className={styles.icon}>Next.js</div>
            <div className={styles.icon}>Nest.js</div>
            <div className={styles.icon_js}>PostgresSQl</div>
          </div>
        </section>

        <section className={`${styles.Megumi} ${styles.scroollHidden}`}>
          <h3>Megumi Shushi</h3>
          <p>
          Como desarrollador, fui responsable de implementar el menú interactivo del sitio, donde cada sección presenta una selección de platos con descripciones detalladas, imágenes tentadoras, y precios claros. Utilicé tecnologías como Next.js, Node.js, para asegurar una navegación fluida y una carga rápida, optimizando así la experiencia del usuario.
          </p>
          <p>Front-end</p>
          <figure>
            <Link href={"https://megumisushiwok.vercel.app/"} target="_blank">
              <Image
                src={"/megumi.jpg"}
                width={200}
                height={100}
                alt="img"
              />
            </Link>
          </figure>
          <div className={styles.container_icon}>
            <div className={styles.icon}>Next.js</div>
            <div className={styles.icon}>Node</div>
            <div className={styles.icon_js}>Framer Motion</div>
          </div>
        </section>

        <section className={`${styles.Joyeria} ${styles.scroollHidden}`}>
          <h3>Joyeria</h3>
          <p>
          Como desarrollador, participé en la construcción de la interfaz del usuario, asegurando que el catálogo de productos fuera fácil de navegar y visualmente atractivo. Utilicé tecnologías como Next.js, Nest, Node.js, PostgreSQL para desarrollar un sistema de búsqueda eficiente y una presentación de productos que resalte cada pieza con imágenes de alta calidad y descripciones detalladas, Actualmente sigue en desarrollo.
          </p>
          <p>Full Stack</p>
          <figure>
            <Link
              href={"https://joyeriamilagrodelnorte.vercel.app/"}
              target="_blank"
            >
              <Image src={"/joyeria.jpg"} width={200} height={100} alt="img" />
            </Link>
          </figure>
          <div className={styles.container_icon}>
            <div className={styles.icon}>Next.js</div>
            <div className={styles.icon}>Nest.js</div>
            <div className={styles.icon_js}>PostgresSQL</div>
          </div>
        </section>

        {/* <section className={`${styles.faster} ${styles.scroollHidden}`}>
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
        </section> */}
      </section>
    </>
  );
};

export default Proyectos;
