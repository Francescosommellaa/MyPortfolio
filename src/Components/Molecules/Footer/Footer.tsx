import React from "react";
import "./Footer.scss";

// atoms
import ButtonSecondary from "../../Atoms/Button/Button";
import Hr from "../../Atoms/HorizontalRule/Hr";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="top-footer">
        <h1>
          Lavoriamo <br /> Insime
        </h1>
        <ButtonSecondary text="Parliamo" size={"l"} className={" "} />
      </div>
      <Hr margin={"big"} />
      <div className="contact-container">
        <a
          href="mailto:Info@francescosommella.design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonSecondary
            text="Info@francescosommella.design"
            size={"m"}
            className={" "}
            withIcon={false}
          />
        </a>
        <a
          href="https://wa.me/393773711446"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonSecondary
            text="3773711446"
            size={"m"}
            className={" "}
            withIcon={false}
          />
        </a>
      </div>

      <div className="info-container">
        <div>
          <h6>Versione</h6>
          <span>© 2024</span>
        </div>
        <div className="bottomleft-footer">
          <h6>Social</h6>
          <div className="social-container">
            <a
              href="https://www.awwwards.com/sites/lifeworld-by-olafur-eliasson"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonSecondary
                text="Awwwards"
                size={"s"}
                className={" social "}
                withIcon={false}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/francescosommellaa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonSecondary
                text="Linkedin"
                size={"s"}
                className={" social "}
                withIcon={false}
              />
            </a>
            <a
              href="https://www.instagram.com/designby.fra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonSecondary
                text="Instagram"
                size={"s"}
                className={" social "}
                withIcon={false}
              />
            </a>
            <a
              href="https://twitter.com/Designby_fra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonSecondary
                text="X(Twitter)"
                size={"s"}
                className={" social "}
                withIcon={false}
              />
            </a>
            <a
              href="https://www.behance.net/designby_fra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonSecondary
                text="Behance"
                size={"s"}
                className={" social "}
                withIcon={false}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
