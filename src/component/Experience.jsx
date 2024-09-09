import { useState, useEffect } from "react";
import styles from "../styles/index.module.scss";

const Experience = () => {
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const handIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.scrollVisible);
          entry.target.classList.remove(styles.scrollHidden);
        } else {
          entry.target.classList.remove(styles.scrollVisible);
          entry.target.classList.add(styles.scrollHidden);
        }
      });
    };
    const observer = new IntersectionObserver(handIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    const experiencia = document.querySelector(`.${styles.Experiencia}`);
    if (experiencia) {
      observer.observe(experiencia);
    }

    return () => {
      if (experiencia) {
        observer.unobserve(experiencia);
      }
    };
  }, []);

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <>
      <section className={styles.Experiencia}>
        <h2>Experience</h2>
        <p>I am a full stack developer with 3 years of experience, starting as a frontend developer and later specializing in full stack development. I have solid knowledge of technologies such as Next.js, Nest.js, JavaScript, and PostgreSQL. I have worked on various freelance projects, developing web applications from scratch, integrating relational databases, RESTful APIs, and creating dynamic and optimized frontends. I specialize in building efficient and scalable solutions, implementing best practices in web development, optimizing user experience, and ensuring performance and security. Additionally, I have experience in cloud deployment and working in teams under agile methodologies. 
        </p>
        {/* <p>
          Desarrollador en{" "}
          <a href="https://codingsquad.co" target="_blank">
            codingSquad
          </a>{" "}
          desde enero del 2023.
        </p> */}
        <h2 onClick={toggleSkills} className={styles.clickable}>
          Skills
        </h2>
        <ul className={`${styles.skillsList} ${showSkills ? styles.show : styles.hide}`}>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SASS</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Next.js</li>
          <li>Nest.js</li>
          <li>PostgreSQL</li>
          <li>APIREST</li>
          <li>AWS</li>
        </ul>
      </section>
    </>
  );
};

export default Experience;
