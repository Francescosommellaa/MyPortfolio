import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// SCSS
import "./Sidebar.scss";

// Atoms
import Logo from "../Logo/Logo";

// DB
import NavLink from "../../DB/NavLink";
import SocialLinks from "../../DB/Social";

const menuIcon = new URL(
  "/src/Assets/Icon-Tools/Icon/Name=menu, Dimension=M.svg",
  import.meta.url
).href;
const closeIcon = new URL(
  "/src/Assets/Icon-Tools/Icon/Name=Close, Dimension=M.svg",
  import.meta.url
).href;

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  return (
    <nav className="sidebar-container" aria-label="Sidebar">
      {/* Icona del menu */}
      <a className="menu-icon" onClick={toggleSidebar}>
        <img src={!isOpen ? menuIcon : closeIcon} alt="Close menu" />
      </a>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <Link to="/" onClick={toggleSidebar}>
            <Logo size={"S"} />
          </Link>
        </div>

        {/* Navigazione */}
        <nav className="sidebar-nav">
          <Link
            to="/"
            onClick={toggleSidebar}
            className={`nav-link ${
              location.pathname === "/Home" ? "active" : ""
            }`}
          >
            <h4>Home</h4>
          </Link>
          {NavLink.map((link) => (
            <Link
              key={link.name}
              to={link.url}
              onClick={toggleSidebar}
              className={`nav-link ${
                location.pathname === link.url ? "active" : ""
              }`}
            >
              <h4>{link.name}</h4>
            </Link>
          ))}
        </nav>

        {/* Links sociali */}
        <footer className="sidebar-footer">
          {SocialLinks.map((social, index) => (
            <a
              className="text-paragraph-small"
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              {social.name}
            </a>
          ))}
        </footer>
      </div>
    </nav>
  );
};

export default Sidebar;
