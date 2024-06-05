import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Button.css";

export const Button = ({ onClick, label, variant, ariaLabel, to }) => {
  const buttonContent = (
    <button
      onClick={onClick}
      className={`${variant}-button`}
      aria-label={ariaLabel || label}
    >
      {label}
    </button>
  );

  return to ? <Link to={to}>{buttonContent}</Link> : buttonContent;
};

Button.proptypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  to: PropTypes.string,
};
