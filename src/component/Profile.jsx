import { useEffect } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from "../styles/index.module.scss";
import Link from "next/link";
import Image from "next/image";

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
        <h2>Full Stack Web</h2>
        <p>
        I build accessible products and digital experiences for the web.
        </p>
        <div>
          <Link href={"https://github.com/joseluiscodesk8"} target="_blanck">
            <BsGithub className={styles.icon} />
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/jos%C3%A9-lu%C3%ADs-g%C3%B3mez-angarita-5785941a3/"
            }
            target="_blanck"
          >
            <BsLinkedin className={styles.icon} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Profile;
