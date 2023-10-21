import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faLocationArrow,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import {
  motion,
  useInView,
  useAnimation,
} from "framer-motion";

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDivClick = (index) => {
    setActiveIndex(index);
  };

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
        hidden: {opacity: 0, y: "2rem" },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{duration: 0.5, delay: 0.25}}
      className="F-wrapper container"
    >
      <div className="m-text">
        <h1>Explore the solutions</h1>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
        </p>
      </div>
      <div className="features">
        <div className="left-side">
          <div className="text">
            <h2>Powerful suite of tools</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa.
            </p>
          </div>
          <ul className="elements">
            <div
              className={`ele ${activeIndex === 0 ? "active" : ""}`}
              onClick={() => handleDivClick(0)}
            >
              <li className="element">
                <div className="text">
                  <h3>Building the Simple ecosystem</h3>
                  <p>
                    Take collabration to the netx level with security and
                    adminstrative features built for teams.
                  </p>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faBolt} />
                </div>
              </li>
            </div>
            <div
              className={`ele ${activeIndex === 1 ? "active" : ""}`}
              onClick={() => handleDivClick(1)}
            >
              <li className="element">
                <div className="text">
                  <h3>Building the Simple ecosystem</h3>
                  <p>
                    Take collabration to the netx level with security and
                    adminstrative features built for teams.
                  </p>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faLocationArrow} />
                </div>
              </li>
            </div>
            <div
              className={`ele ${activeIndex === 2 ? "active" : ""}`}
              onClick={() => handleDivClick(2)}
            >
              <li className="element">
                <div className="text">
                  <h3>Building the Simple ecosystem</h3>
                  <p>
                    Take collabration to the netx level with security and
                    adminstrative features built for teams.
                  </p>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faMoon} />
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className="right-side">
          <img src="/static/images/features-bg.png"></img>
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
