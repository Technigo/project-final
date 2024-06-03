import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Button = ({ onClick, label, className, ariaLabel, to }) => {
  const buttonContent = (
    <button
      onClick={onClick}
      className={`${className}-button`}
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
