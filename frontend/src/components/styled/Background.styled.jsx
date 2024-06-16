import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bgColor || '#222222'};
  z-index: -999;
`;