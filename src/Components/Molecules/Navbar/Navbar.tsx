import React from "react";
import "./Navbar.scss";

import { Link, useLocation } from "react-router-dom";

// Atoms
import ButtonSecondary from "../../Atoms/Button/Button";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="left-nav">
        <div className="logo-container">
          <Link to="/">
            <h5 className="logo-text">
              © Design by Fra | © Francesco Sommella
            </h5>
          </Link>
        </div>

        <div className="divider"></div>

        <ul className="nav-links">
          <li>
            <Link
              to="/lavori"
              className={`nav-link ${
                location.pathname === "/lavori" ? "active" : ""
              }`}
            >
              <h5>Lavori</h5>
            </Link>
          </li>
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
        </ul>
      </div>

      <div className="right-nav">
        <Link to="/parliamo">
          <ButtonSecondary
            size="s"
            text="Parliamo"
            className={`${
              location.pathname === "/parliamo" ? "active-button" : ""
            }`}
          ></ButtonSecondary>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
