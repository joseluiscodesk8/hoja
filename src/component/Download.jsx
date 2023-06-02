import { useEffect } from "react";
import styles from "../styles/index.module.scss";

const Download = () => {
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

    const Download = document.querySelector(`.${styles.Download}`);
    if (Download) {
      observer.observe(Download);
    }

    return () => {
      if (Download) {
        observer.unobserve(Download);
      }
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv/cves.jpg";
    link.download = "cv.jpg";
    link.click();
  };

  return (
    <>
      <section className={styles.Download}>
        <p>Descarga Mi Hoja de vida</p>
        <div>
          <button onClick={handleDownload}>HV</button>;
        </div>
      </section>
    </>
  );
};

export default Download;
