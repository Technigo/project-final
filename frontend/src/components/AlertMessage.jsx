import PropTypes from "prop-types";
import StyledAlertMessage from "./styled/AlerMessage.styled";

export const AlertMessage = ({ type, message }) => {
  return (
    <StyledAlertMessage type={type} >
      <p>{message}</p>
    </StyledAlertMessage>
  );
};

AlertMessage.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
