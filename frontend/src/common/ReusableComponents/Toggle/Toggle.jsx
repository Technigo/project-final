import { useState, useEffect } from "react";
import { Image } from "../Image/Image";
import PropTypes from "prop-types";
import "./Toggle.css";
import plus from "/assets/icons/plus.svg";
import minus from "/assets/icons/minus.svg";

export const Toggle = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Check for large screen size
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="toggle-wrapper">
      <h5
        className="toggle-title"
        onClick={!isLargeScreen ? toggleOpen : undefined}
      >
        {title}
        <Image
          src={isOpen ? minus : plus}
          alt={isOpen ? "Collapse" : "Expand"}
          className="toggle-icon"
        />
      </h5>
      <div
        className={`toggle-content ${
          isLargeScreen || isOpen ? "visible" : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

Toggle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
