import { useState } from "react";
import { Image } from "../Image/Image";
import PropTypes from "prop-types";
import "./Toggle.css";
import plus from "/assets/icons/plus.svg";
import minus from "/assets/icons/minus.svg";

export const Toggle = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Check for large screen size on component render
  const isLargeScreen = window.innerWidth >= 1024;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="toggle-wrapper">
      <h5 className="toggle-title" onClick={toggleOpen}>
        {title}
        <Image
          src={isOpen ? minus : plus}
          alt={isOpen ? "Collapse" : "Expand"}
          className="toggle-icon"
        />
      </h5>
      <div className="toggle-content">
        {isLargeScreen || isOpen ? children : null}
      </div>
    </div>
  );
};

Toggle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
