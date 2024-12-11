import React from "react";
import { Link, useLocation } from "react-router-dom";

// DB
import NavLink from "../../DB/NavLink";

// SCSS
import "./Navbar.scss";

// Atoms
import Logo from "../../Atoms/Logo/Logo";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/">
        <Logo size={"S"} />
      </Link>

      <ul className="nav-links">
        {NavLink.map((link) => (
          <li key={link.name}>
            <Link
              to={link.url}
              className={`nav-link ${
                location.pathname === link.url ? "active" : ""
              }`}
            >
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
