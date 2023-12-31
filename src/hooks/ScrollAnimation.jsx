// import { useEffect, useRef } from "react";
// import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";


// const ScrollAnimation = () => {

// }








import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollAnimation = (children) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
