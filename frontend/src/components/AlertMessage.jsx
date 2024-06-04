import PropTypes from "prop-types";
import StyledAlertMessage from "./styled/AlerMessage.styled";


export const AlertMessage = ({ type, message }) => {
  return (
    <StyledAlertMessage
      className={`alert-message ${
        type === "success" ? "background-success" : "background-error"
      }`}
    >
      <p>{message}</p>
    </StyledAlertMessage>
  );
};

AlertMessage.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
