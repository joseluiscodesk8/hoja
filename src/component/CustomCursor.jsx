// import React, { useEffect, useState } from "react";
// import styles from "../../styles/index.module.scss";

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       setPosition({ x: event.clientX, y: event.clientY });
//     };

//     document.addEventListener("mousemove", handleMouseMove);
//     return () => document.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div
//       className={styles.customCursor}
//       style={{ left: `${position.x}px`, top: `${position.y}px` }}
//     />
//   );
// };

// export default CustomCursor;
