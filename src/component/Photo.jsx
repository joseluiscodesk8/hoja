/* eslint-disable react-hooks/exhaustive-deps */
import styles from "../styles/index.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Photo = () => {
  const controls = useAnimation();

  const bubbleAnimation = {
    x: ["0%", "100%", "-100%", "0%"],
    y: ["0%", "-20%", "20%", "-20%", "20%", "0%"],
  };

  useEffect(() => {
    controls.start(bubbleAnimation);
  }, [bubbleAnimation, controls]);

  return (
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
        onDragEnd={() => {
          controls.start(bubbleAnimation);
        }}
        animate={controls}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </picture>
  );
};

export default Photo;
