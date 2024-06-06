import styled from "styled-components";

const StyledAlertMessage = styled.div`
  padding: 8px 12px;
  border-radius: 4px;
  margin: 6px auto;
  background-color: ${(props) =>
    props.type === "success"
      ? "rgba(7, 153, 146,1.0)"
      : "rgba(149, 175, 192, 1)"};

  p {
    font-size: 16px;
  }
`;

export default StyledAlertMessage;
