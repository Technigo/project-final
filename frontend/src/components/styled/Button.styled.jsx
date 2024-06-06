import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 28px;
  padding: 10px 24px;
  border: none;
  background-color: rgba(60, 99, 130, 1);
  color: rgba(241, 242, 246, 1);
  margin: 8px 0;
  font-family: "Bodoni Moda", serif;

  &:hover {
    background-color: rgba(96, 163, 188, 1);
    cursor: pointer;
  }
`;

export default StyledButton;
