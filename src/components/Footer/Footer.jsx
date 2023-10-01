import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-wrapper container">
      <div className="f-top">
        <div className="terms">
          <div className="logo"></div>
          <div className="items">
            <a href="">Terms</a>
            <span> . </span>
            <a href="">Privacy Policy</a>
          </div>
        </div>
        <div className="links">
          <div className="link">
            <h6>Products</h6>
            <ul>
              <li>Web Studio</li>
              <li>DynamicBox Flex</li>
              <li>Programming Forms</li>
              <li>Integrations</li>
              <li>Command-line</li>
            </ul>
          </div>
          <div className="link">
            <h6>Resources</h6>
            <ul>
              <li>Documentation</li>
              <li>Tutorials & Guides</li>
              <li>Blog</li>
              <li>Support Center</li>
              <li>Partners</li>
            </ul>
          </div>
          <div className="link">
            <h6>Company</h6>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Company values</li>
              <li>Pricing</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="link">
            <h6>Subscribe</h6>
            <p>Get the latest news and articles to your inbox every month.</p>
            <div className="form">
              <input placeholder="Your email ..."></input>
              <button>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="f-bottom">
        <div className="copyrights">&copy; Cruip.com. All rights reserved.</div>
        <div className="icons">
          <div className="icon">
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
