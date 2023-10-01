import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";



const Subscribe = () => {

  // animation code
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
    ref={ref}
    variants={{
      hidden: { opacity: 0, y: "2rem" },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ duration: 0.5, delay: 0.25 }}
    className="S-wrapper container">
      <div className="left-side">
        <div className="m-text">
          <h1>Want more tutorials & guides?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit nemo
            expedita voluptas culpa sapiente.
          </p>
        </div>
        <div className="form">
          <form>
            <input placeholder="Your email..."></input>
            <button>Subscribe</button>
          </form>
        </div>
        <span>No spam. You can unsubscribe at any time.</span>
      </div>
      <div className="right-side">
        <div className="g-one">
          <div className="one">
            {/* <div className="one-p"></div> */}
          </div>
        </div>
        <div className="g-two">
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
          <div className="five"></div>
          <div className="six"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Subscribe;
