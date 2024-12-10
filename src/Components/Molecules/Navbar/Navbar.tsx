import React from "react";
import { Link, useLocation } from "react-router-dom";
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
          <li key={link.Name}>
            <Link
              to={link.Url}
              className={`nav-link ${
                location.pathname === link.Url ? "active" : ""
              }`}
            >
              <span>{link.Name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
