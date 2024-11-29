import React from "react";
import "./Navbar.scss";

import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <h5 className="logo-text">© Design by Fra | © Francesco Sommella</h5>
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link
            to="/about"
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            <h5>About</h5>
          </Link>
        </li>
        <li>
          <Link
            to="/parliamo"
            className={`nav-link ${
              location.pathname === "/parliamo" ? "active" : ""
            }`}
          >
            <h5>Parliamo</h5>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
