import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
const SignUp = () => {
  return (
    <div className="sign container">
      <div className="text">
        <h1>Welcome . We exist to make entrepreneurship easier</h1>
      </div>
      <div className="form-container">
        <form className="form">
          <div className="form-groub">
            <label>Name</label>
            <input placeholder="Enter your name" type="text"></input>
          </div>
          <div className="form-groub">
            <label>Email</label>
            <input placeholder="Enter your email address" type="text"></input>
          </div>
          <div className="form-groub">
            <label>Password</label>
            <input type="password" placeholder="Enter your password"></input>
          </div>
          <button className="signin">Sign up</button>
          <p>
            By creating an account, you agree to the{" "}
            <Link>terms & conditions</Link>, and our <Link>privacy policy</Link>
            .
          </p>
          <i>Or</i>
          <button className="github">
            <span>
              <FontAwesomeIcon icon={faGithub} />
            </span>
            Continue with Github
          </button>
          <button className="google">
            <span>
              <FontAwesomeIcon icon={faGoogle} />
            </span>
            Continue with coogle
          </button>
          <div className="trans">
            Do not you have an account?<Link to={"/signin"}> Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
