import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <div className="sign container">
      <div className="text">
        <h1>Welcome back. We exist to make entrepreneurship easier</h1>
      </div>
      <div className="form-container">
        <form className="form">
          <div className="form-groub">
            <label>Email</label>
            <input placeholder="Enter your email address" type="text"></input>
          </div>
          <div className="form-groub">
            <label>Password</label>
            <input type="password" placeholder="Enter your password"></input>
          </div>
          <div className="radio">
            <input type="radio" id="huey" name="drone" value="huey" />
            <label>Remember this device</label>
          </div>
          <button className="signin">Sign in</button>
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
            Do not you have an account?<Link to={"/signup"}> Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
