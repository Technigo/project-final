import { useState } from "react";
import { MuseumCard } from "./MuseumCard";
import StyledButton from "./styled/Button.styled";
import StyledCardMuseumContainer from "./styled/MuseumCardContainer.styled";

export const MuseumCardContainer = ({ results }) => {
  const [amountToShow, setAmountToShow] = useState(6);

  const showMore = () => setAmountToShow(amountToShow + 6);

  const showMuseums = () =>
    results
      .slice(0, amountToShow)
      .map((museum, id) => <MuseumCard museum={museum} key={id} />);
  return (
    <>
      <StyledCardMuseumContainer>{showMuseums()}</StyledCardMuseumContainer>
      {amountToShow <= results.length && (
        <StyledButton onClick={showMore}> Show more...</StyledButton>
      )}
    </>
  );
};
