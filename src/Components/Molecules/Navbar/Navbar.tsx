import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

// SCSS
import "./Navbar.scss";

// Atoms
import Logo from "../../Atoms/Logo/Logo";
import Sidebar from "../../Atoms/Sidebar/Sidebar";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Funzione per gestire lo scroll
  const handleScroll = (section: string) => {
    if (location.pathname !== "/") {
      // Se non sei sulla home, torna alla home
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -70, // Offset per eventuale navbar
        });
      }, 100); // Ritardo per assicurare che la home sia caricata
    } else {
      // Scrolla direttamente nella sezione
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  };

  return (
    <nav className="navbar">
      <Logo size={"S"} />

      <ul className="nav-links">
        <li className="nav-link" onClick={() => handleScroll("about")}>
          About
        </li>
        <li className="nav-link" onClick={() => handleScroll("lavori")}>
          Lavori
        </li>
        <li>
          <Link
            to="/parliamo"
            className={`nav-link ${
              location.pathname === "/parliamo" ? "active" : ""
            }`}
          >
            Parliamo
          </Link>
        </li>
      </ul>

      <Sidebar />
    </nav>
  );
};

export default Navbar;
