import { BatterySlider } from "../reusables/BatterySlider";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const StyledBatteryCard = styled.div`
  border-radius: 20px;
  background: linear-gradient(180deg, #dcded0 82.22%, #cce0a1 100%);
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 30px;
  button {
  }
`;

const StyledHeading = styled.h2`
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 10px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 18px; /* Use a larger font size for larger screens */
  }

  @media (min-width: 1024px) {
    font-size: 22px; /* Use an even larger font size for extra large screens */
  }
`;

export const EnergyCard = ({ id }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    !isMobile && (
      <StyledBatteryCard>
        <StyledHeading>How's your energy level right now?</StyledHeading>
        <BatterySlider id={id} />
      </StyledBatteryCard>
    )
  );
};
