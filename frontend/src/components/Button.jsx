import PropTypes from "prop-types";

export const Button = ({ text, style, onClick }) => {
  const blueStyle = "bg-button-blue shadow-[0px_4px_4px_#000000] text-white";
  const whiteStyle =
    "border-button-blue text-button-blue border-2 border-solid";
  // font weight is 700 acc. to the design - need to import Poppins with 700 weight
  return (
    <button
      onClick={onClick}
      className={`${style === "white" ? whiteStyle : blueStyle} min-h-12 w-48 rounded px-1.5 font-poppins text-base`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string,
  onClick: PropTypes.func,
};
