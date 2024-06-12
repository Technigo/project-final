import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const Button = ({ text, style, navTo, onClickFunc, disabled, type }) => {
  const navigate = useNavigate();

  const blueStyle =
    "bg-button-blue shadow-[0px_4px_4px_#000000] text-white disabled:bg-button-disabled";
  const whiteStyle =
    "border-button-blue text-button-blue border-2 border-solid hover:text-white";

  return (
    <button
      onClick={() => {
        onClickFunc && onClickFunc();
        navigate(navTo);
      }}
      className={`${style === "white" ? whiteStyle : blueStyle} min-h-12 min-w-48 rounded px-4 font-montserrat text-base font-bold hover:bg-button-hover`}
      disabled={disabled}
      type={type ? type : "submit"}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string,
  navTo: PropTypes.string,
  onClickFunc: PropTypes.func,
  disabled: PropTypes.bool,
};
