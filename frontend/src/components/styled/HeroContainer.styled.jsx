import styled from "styled-components";

const HeroContainer = styled.div`
  position: relative;

  h1 {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0;
    justify-content: center;
    color: white;
  }
`;

export default HeroContainer;
