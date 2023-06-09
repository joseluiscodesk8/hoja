import { useEffect } from "react";
import styles from "../styles/index.module.scss";

const Footer = () => {
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

    const footer = document.querySelector(`.${styles.footer}`);
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);
  return (
    <>
      <div className={styles.footer}>
        <p>
          Codificado en <b>Visual Studio Code</b>, Construido con <b>Next.js</b>{" "}
          y <b>SASS</b>, desplegado con <b>Vercel</b>.
        </p>
      </div>
    </>
  );
};

export default Footer;
