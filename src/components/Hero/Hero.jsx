import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ y: "2rem", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        type: "spring",
      }}
      className="hero-wrapper container"
    >
      <div className="text">
        <h1>
          Make your website <span>wonderful</span>
        </h1>
        <p>
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
        <div className="buttons">
          <button>
            <a href="mailto:elnaho@gmail.com">Start free trial</a>
          </button>
          <button>Learn more</button>
        </div>
      </div>
      <div className="image">
        <img src="../../images/hero-image.png"></img>
        <div className="logo"></div>
        <button>
          <span>
            <FontAwesomeIcon icon={faCirclePlay} />
          </span>
          Watch the full video (2 min)
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
