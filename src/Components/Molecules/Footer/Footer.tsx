import { Link } from "react-router-dom";
import React from "react";

// DB
import SocialLinks from "../../DB/Social";

// SCSS
import "./Footer.scss";

// atoms
import Button from "../../Atoms/Button/Button";
import Logo from "../../Atoms/Logo/Logo";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Logo */}
      <Link to="/">
        <Logo size="S" light={true} />
      </Link>

      {/* Titolo */}
      <div className="title">
        <h1>
          Lavoriamo <br /> Insieme
        </h1>
      </div>

      {/* Contatti */}
      <div className="contact-container">
        <a
          href="mailto:Info@francescosommella.design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            text="Info@francescosommella.design"
            size={"M"}
            withIcon={false}
            light={true}
          />
        </a>
        <a
          href="https://wa.me/393773711446"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text="3773711446" size={"M"} withIcon={false} light={true} />
        </a>
      </div>

      {/* Social & info */}
      <div className="info-container">
        <div>
          <span className="text-placeholder">Social</span>
          <div className="social-container">
            {SocialLinks.map((social) => (
              <a
                className="text-paragraph-small"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <span className="text-placeholder">
          Ideato, <br /> progettato e <br />
          Sviluppato da me
        </span>
      </div>
    </footer>
  );
};

export default Footer;
