/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
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
        <h2>Projects</h2>
        
        <section className={`${styles.agagem} ${styles.scroollHidden}`}>
          <b></b>
          <h4>Agagem</h4>
          <p>
          A robust and efficient e-commerce platform built with Next.js and Nest.js. This online store combines the client-side performance of Next.js with the scalability and modularity of Nest.js on the server side. It offers a smooth and highly responsive user experience, backed by a secure and flexible backend architecture.
          </p>
          <p>Full Stack Responsive Design</p>
          <figure>
            <Link
              href={"https://agagem.vercel.app/"}
              target="_blank"
            >
              <Image src="/agagem.jpg" width={200} height={100} alt="img" />
            </Link>
          </figure>
          <div className={styles.container_icon}>
            <div className={styles.icon}>Next.js</div>
            <div className={styles.icon}>Sass</div>
            <div className={styles.icon}>Nest.js</div>
          </div>
        </section>

        <section className={`${styles.engie} ${styles.scroollHidden}`}>
          <h4>Enginectra</h4>
          <p>
          An impressive website redesign for an engineering company, built with Next.js, that elevates the user experience to new heights. With an intuitive and dynamic interface, this site delivers detailed technical information in a clear and accessible way. Next.js's advanced technology ensures fast loading and seamless navigation, transforming how visitors interact with the world of engineering online.
          </p>
          <p>Front-end Mobile</p>
          <figure>
            <Link
              href={"https://engineer-seven.vercel.app/"}
              target="_blank"
            >
              <Image src="/engie.jpg" width={200} height={100} alt="img" />
            </Link>
          </figure>
          <div className={styles.container_icon}>
            <div className={styles.icon}>Next.js</div>
            <div className={styles.icon}>Sass</div>
            <div className={styles.icon_js}>Responsive</div>
          </div>
        </section>

        <section className={`${styles.axiora} ${styles.scroollHidden}`}>
          <h4>Axiora</h4>
          <p>
          In the development of Axiora, I focused on application architecture, API integration, and implementing interactive features using tools like Next.js, Node.js, Nest.js, and PostgreSQL. Additionally, I worked closely with the design team to ensure that every visual and functional element was aligned with the project's objectives.
          </p>
          <p>Full Stack Responsive Design</p>
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
            <div className={styles.icon_js}>PostgreSQL</div>
          </div>
        </section>

        <section className={`${styles.Megumi} ${styles.scroollHidden}`}>
          <h3>Megumi Shushi</h3>
          <p>
          As a developer, I was responsible for implementing the interactive menu on the site, where each section features a selection of dishes with detailed descriptions, enticing images, and clear prices. I used technologies like Next.js and Node.js to ensure smooth navigation and fast loading, optimizing the user experience.
          </p>
          <p>Front-end Mobile</p>
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
          <h3>Jewelry</h3>
          <p>
          As a developer, I participated in building the user interface, ensuring that the product catalog was easy to navigate and visually appealing. I used technologies like Next.js, Nest.js, Node.js, and PostgreSQL to develop an efficient search system and a product presentation that highlights each piece with high-quality images and detailed descriptions. Currently, it is still under development.
          </p>
          <p>Full Stack Responsive Design</p>
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
            <div className={styles.icon_js}>PostgreSQL</div>
          </div>
        </section>

        {/* <section className={`${styles.faster} ${styles.scroollHidden}`}>
          <h3>Faster</h3>
          <p>
            Faster is a motorcycle taxi application designed for drivers,
            developed with Next.js. The app allows drivers to sign up and
            provide motorcycle transportation services efficiently.
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

