import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRetweet,
  faRecordVinyl,
  faFingerprint,
  faSatelliteDish,
  faArrowsSpin,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { motion, useInView, useAnimation } from "framer-motion";

const FeaturesBlocks = () => {
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
      className="FeatBlocks"
    >
      <div className="f-blocks container">
        <div className="m-text">
          <h1>Explore the solutions</h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat.
          </p>
        </div>
        <div className="blocks">
          <div className="item">
            <div className="icon">
              <FontAwesomeIcon icon={faRetweet} />
            </div>
            <h2>Headless CMS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="item">
            <div className="icon">
              <FontAwesomeIcon icon={faRecordVinyl} />
            </div>
            <h2>Headless CMS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="item">
            <div className="icon">
              <FontAwesomeIcon icon={faFingerprint} />
            </div>
            <h2>Headless CMS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="item">
            <div className="icon">
              <FontAwesomeIcon icon={faSatelliteDish} />
            </div>
            <h2>Headless CMS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="item">
            <div className="icon">
              <FontAwesomeIcon icon={faArrowsSpin} />
            </div>
            <h2>Headless CMS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="item">
            <div className="icon">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <h2>Headless CMS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesBlocks;
