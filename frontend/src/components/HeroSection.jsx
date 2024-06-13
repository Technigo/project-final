import { Carousel } from "./Carousel"
//import HeroContainer from "./styled/HeroContainer.styled"
//import Overlay from "./styled/Overlay.styled"
import styled from "styled-components"

export const HeroSection = () => {
  return (
    <HeroContainer>
      <Carousel />
      <Overlay />
      <Heading>
        WHERE CURIOSITY MEETS <i>CULTURE</i>{" "}
      </Heading>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(22, 21, 21, 0.1) 0%,
    rgba(22, 21, 21, 0.1) 30%,
    rgba(22, 21, 21, 0.1) 70%,
    #333333 100%
  );
  z-index: 0;
`

const Heading = styled.h1`
  position: relative;
  color: white;
  z-index: 1;
  font-size: 3em;
  text-align: center;
  padding: 20px;
  font-family: "Chocolate Classical Sans", sans-serif;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 4em;
  }
`
