import React, { useEffect, useState } from "react";

// SCSS
import "./Cursor.scss";

const Cursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isAbsorbed, setIsAbsorbed] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const [isText, setIsText] = useState(false);
  const [textHeight, setTextHeight] = useState(24);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleLinkHover = () => setIsAbsorbed(true);
    const handleLinkLeave = () => setIsAbsorbed(false);
    const handleInputHover = () => setIsInput(true);
    const handleInputLeave = () => setIsInput(false);
    const handleTextHover = (e: Event) => {
      setIsText(true);
      const element = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(element);
      const lineHeight = parseFloat(computedStyle.lineHeight);
      setTextHeight(lineHeight);
    };
    const handleTextLeave = () => setIsText(false);

    // Select all links and buttons
    const interactiveElements = document.querySelectorAll("a, button");
    const inputElements = document.querySelectorAll("input, textarea");
    const textElements = document.querySelectorAll("p,span, h4, h5, h6");

    // Add event listeners to all interactive elements
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleLinkHover);
      element.addEventListener("mouseleave", handleLinkLeave);
    });

    inputElements.forEach((element) => {
      element.addEventListener("mouseenter", handleInputHover);
      element.addEventListener("mouseleave", handleInputLeave);
    });

    textElements.forEach((element) => {
      element.addEventListener("mouseenter", handleTextHover);
      element.addEventListener("mouseleave", handleTextLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleLinkHover);
        element.removeEventListener("mouseleave", handleLinkLeave);
      });
      inputElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleInputHover);
        element.removeEventListener("mouseleave", handleInputLeave);
      });
      textElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleTextHover);
        element.removeEventListener("mouseleave", handleTextLeave);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isVisible ? "visible" : "hidden"} ${
        isAbsorbed ? "absorbed" : ""
      }  ${isInput ? "input-cursor" : ""} ${isText ? "text-cursor" : ""}`}
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        height: isText ? `${textHeight}px` : undefined,
      }}
    />
  );
};

export default Cursor;
