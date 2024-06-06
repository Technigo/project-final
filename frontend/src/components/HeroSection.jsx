import { Carousel } from "./Carousel";
import HeroContainer from "./styled/HeroContainer.styled";
import Overlay from "./styled/Overlay.styled";

export const HeroSection = () => {
  return (
    <HeroContainer>
      <Carousel />
      <Overlay />
      <h1>
        Where Curiosity <br></br>Meets Culture
      </h1>
    </HeroContainer>
  );
};
