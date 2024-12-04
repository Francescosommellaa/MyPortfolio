import { Link } from "react-router-dom";
import React from "react";
import "./Footer.scss";

// atoms
import Button from "../../Atoms/Button/Button";
import Logo from "../../Atoms/Logo/Logo";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Link to="/">
        <Logo size="S" light={true} />
      </Link>
      <div className="title">
        <h1>
          Lavoriamo <br /> Insieme
        </h1>
      </div>
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

      <div className="info-container">
        {/* social */}
        <div>
          <span className="text-placeholder">Social</span>
          <div className="social-container">
            <a
              className="text-paragraph-small"
              href="https://www.awwwards.com/sites/lifeworld-by-olafur-eliasson"
              target="_blank"
              rel="noopener noreferrer"
            >
              Awwwards
            </a>
            <a
              className="text-paragraph-small"
              href="https://www.linkedin.com/in/francescosommellaa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              className="text-paragraph-small"
              href="https://www.instagram.com/designby.fra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="text-paragraph-small"
              href="https://twitter.com/Designby_fra"
              target="_blank"
              rel="noopener noreferrer"
            >
              X(Twitter)
            </a>
            <a
              className="text-paragraph-small"
              href="https://www.behance.net/designby_fra"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance
            </a>
          </div>
        </div>
        {/* info */}
        <span className="text-placeholder">
          Ideato, <br /> progettato e <br />
          Sviluppato da me
        </span>
      </div>
    </footer>
  );
};

export default Footer;
