import { useState } from "react";
import PropTypes from "prop-types";
import "./Toggle.css";

export const Toggle = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="toggle-wrapper">
      <h5 className="toggle-title" onClick={toggleOpen}>
        {title}
        <span className="toggle-icon">{isOpen ? "-" : "+"}</span>
      </h5>
      {isOpen && <div className="toggle-content">{children}</div>}
    </div>
  );
};

Toggle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
