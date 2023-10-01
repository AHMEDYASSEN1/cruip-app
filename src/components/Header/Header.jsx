import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  // header shadow code
  const [top, setTop] = useState(true);

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  // menu code

  const [showMenu, setShowMenu] = useState(false);
  const calssVal = showMenu ? "show" : "hide";

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const navigate = useNavigate();

  return (
    <div className={`header-wrapper ${top ? "" : "h-shadow"}`}>
      <div className="h-container container">
        <Link to={"/"}>
          <div className="logo">
            <div></div>
          </div>
        </Link>
        <div ref={menuRef}>
          <div className="menu-icon">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          </div>
          <div className={`meun ${calssVal}`}>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign in
            </button>
            <button
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
