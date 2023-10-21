import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Testimonials = () => {
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
      className="T-wrapper container"
    >
      <div className="m-text">
        <h1>Trusted by over 20,000 companies all over the world</h1>
        <p>
          Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar
          mattis blandit libero cursus mattis.
        </p>
      </div>
      <div className="images">
        <img
          src="/static/images/Facebook,_Inc._Logo_2019.svg.png"
          alt=""
        />
        <img
          src="/static/images/Bondebladet_(weekly)_logo_2015.svg.png"
          alt=""
        />
        <img src="/static/images/Nibbleblog_Logo.png" alt="" />
        <img
          src="/static/images/1920px-Graphisoft_logo.svg.png"
          alt=""
        />
        <img src="/static/images/Ipekevi-logo.svg.png" alt="" />
      </div>
      <div className="testimonials">
        <img src="/static/images/testimonial.jpg"></img>
        <p>
          “ I love this product and would recommend it to anyone. Could be not
          easier to use, and our multiple websites are wonderful. We get nice
          comments all the time. “
        </p>
        <h3>Darya Finger</h3>
        <div className="info">
          CEO & Co-Founder<a> @Dropbox</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
