import styled from "styled-components";

export const StyledNavBar = styled.nav`
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;

  ul {
    display: flex;
    padding-left: 0;
    a {
      margin: 0 5px;
    }
  }

  a {
    margin-left: auto;
    margin-right: 5px;
    display: flex;
  }
`;
