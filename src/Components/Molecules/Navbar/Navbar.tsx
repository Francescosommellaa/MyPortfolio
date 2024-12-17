import React from "react";
import { Link, useLocation } from "react-router-dom";

// SCSS
import "./Navbar.scss";

// Atoms
import Logo from "../../Atoms/Logo/Logo";
import Sidebar from "../../Atoms/Sidebar/Sidebar";

// DB
import NavLink from "../../DB/NavLink";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Logo size={"S"} />

      <ul className="nav-links">
        {NavLink.map((link) => (
          <li key={link.name}>
            <Link
              to={link.url}
              className={`nav-link ${
                location.pathname === link.url ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <Sidebar />
    </nav>
  );
};

export default Navbar;
