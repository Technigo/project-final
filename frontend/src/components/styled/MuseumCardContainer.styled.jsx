import styled from "styled-components";

const StyledCardMuseumContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto;

  width: 100%;
  background-color: rgba(61, 61, 61, 1);

  @media only screen and (min-width: 768px) {
    grid-template-columns: 50% 50%;
  }
`;

export default StyledCardMuseumContainer;
