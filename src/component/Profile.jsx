import { useEffect } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from "../styles/index.module.scss";
import Link from "next/link";

const Profile = () => {
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
      threshold: 0.5,
    });

    const profile = document.querySelector(`.${styles.profile}`);
    if (profile) {
      observer.observe(profile);
    }

    return () => {
      if (profile) {
        observer.unobserve(profile);
      }
    };
  }, []);

  return (
    <>
      <section className={styles.profile}>
        <h1>José Luís Gómez</h1>
        <h2>Front-End Web</h2>
        <p>
          Construyo productos accesibles y experiencias digitales para la web.
        </p>
        <div>
          <Link href={"#"}>
            <BsGithub className={styles.icon} />
          </Link>
          <Link href={"#"}>
            <BsLinkedin className={styles.icon} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Profile;
