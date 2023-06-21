import styles from "../styles/index.module.scss";
import { motion } from "framer-motion";
const Photo = () => {
  return (
    <>
      <picture className={styles.Photo}>
        <motion.img
          src="/jl2.png"
          alt="photo"
          drag
          dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          dragElastic={2}
          whileDrag={{
            boxShadow: "none",
          }}
        />
      </picture>
    </>
  );
};

export default Photo;
