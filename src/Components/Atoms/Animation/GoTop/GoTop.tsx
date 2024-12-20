import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// SCSS
import "./GoTop.scss";

const GoTop: React.FC = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button className="go-top-button" onClick={handleClick}>
        <img
          src={
            new URL(
              "/src/Assets/Icon/Name=arrow-min-top, Dimension=S.svg",
              import.meta.url
            ).href
          }
          alt="Go to top"
        />
      </button>
    )
  );
};

export default GoTop;
