import Hero from "../components/Hero/Hero"
import Features from "../components/Features/Features"
import FeaturesBlocks from "../components/Features/FeaturesBlocks"
import Testimonials from "../components/Testimonials/Testimonials"
import Subscribe from "../components/Subscribe/Subscribe"
import Footer from "../components/Footer/Footer"


const Website = () => {
  return (
    <div className="app">
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Website;
