import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 28px;
  height: 20px;
  width: max-content;
  padding: 10px 24px;
  border: none;
  display: flex;
  align-items: center;
  background-color: rgba(60, 99, 130, 1);
  color: rgba(241, 242, 246, 1);

  &:hover {
    background-color: rgba(96, 163, 188, 1);
  }
`;

export default StyledButton;
