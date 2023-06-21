import styles from "../styles/index.module.scss";
const Photo = () => {
  return (
    <>
      <picture className={styles.Photo}>
        <img src="/jl2.png" alt="photo" />
      </picture>
    </>
  );
};

export default Photo;
