import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/lavori">Lavori</Link>
        </li>
        <li>
          <Link to="/parliamo">Parliamo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
