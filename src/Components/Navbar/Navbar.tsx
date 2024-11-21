import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import ButtonSecondary from "../Button/ButtonSecondary";

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
      </ul>
      <Link to="/parliamo">
        <ButtonSecondary size="s" text="Parliamo" />
      </Link>
    </nav>
  );
};

export default Navbar;
