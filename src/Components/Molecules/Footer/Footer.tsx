import React from "react";
import "./Footer.scss";

// atoms
import Button from "../../Atoms/Button/Button";
import Hr from "../../Atoms/HorizontalRule/Hr";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="top-footer">
        <h1>
          Lavoriamo <br /> Insieme
        </h1>
        <Button text="Parliamo" size={"L"} />
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
          />
        </a>
        <a
          href="https://wa.me/393773711446"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text="3773711446" size={"M"} withIcon={false} />
        </a>
      </div>

      <div className="info-container">
        <div>
          <span>© Francesco Sommella</span>
        </div>
        <div className="bottomleft-footer">
          <span className="text-placeholder">Social</span>
          <div className="social-container">
            <a
              href="https://www.awwwards.com/sites/lifeworld-by-olafur-eliasson"
              target="_blank"
              rel="noopener noreferrer"
            >
              Awwwards
            </a>
            <a
              href="https://www.linkedin.com/in/francescosommellaa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://www.instagram.com/designby.fra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/Designby_fra"
              target="_blank"
              rel="noopener noreferrer"
            >
              X(Twitter)
            </a>
            <a
              href="https://www.behance.net/designby_fra"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
