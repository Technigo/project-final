import styled from "styled-components"
import PropTypes from "prop-types"

export const AlertMessage = ({ type, message }) => {
  return (
    <StyledAlertMessage type={type}>
      <p>{message}</p>
    </StyledAlertMessage>
  )
}

AlertMessage.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

const StyledAlertMessage = styled.div`
  padding: 5px;
  display: block;
  width: 275px;
  border-radius: 4px;
  margin: 6px 0 0 30px;
  background-color: ${(props) =>
    props.type === "success"
      ? "rgba(7, 153, 146,1.0)"
      : "rgba(149, 175, 192, 1)"};

  p {
    font-size: 12px;
  }
`
