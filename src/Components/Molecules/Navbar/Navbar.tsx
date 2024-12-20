import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller, Events } from "react-scroll";

// SCSS
import "./Navbar.scss";

// Atoms
import Logo from "../../Atoms/Logo/Logo";
import Sidebar from "../../Molecules/Sidebar/Sidebar";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 70) {
          currentSection = section.getAttribute("id") || "";
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    Events.scrollEvent.register("end", (to: string) => {
      setActiveSection(to);
    });

    return () => {
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleScroll = (section: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -60,
        });
      }, 100);
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -60,
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-header">
        <Logo size={"S"} />

        <div className="divider" />

        <ul className="nav-links">
          <li>
            <a
              className={`nav-link ${
                activeSection === "about" ? "active" : ""
              }`}
              onClick={() => handleScroll("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              className={`nav-link ${
                activeSection === "lavori" ? "active" : ""
              }`}
              onClick={() => handleScroll("lavori")}
            >
              Lavori
            </a>
          </li>
        </ul>
      </div>
      {/* Parliamo */}
      <ul className="nav-links">
        <li>
          <Link
            to="/parliamo"
            className={`nav-link nav-link-page ${
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
