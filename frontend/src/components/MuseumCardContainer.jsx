import { useState } from "react";
import { MuseumCard } from "./MuseumCard";
import StyledButton from "./styled/Button.styled";
import StyledMuseumCardContainer from "./styled/MuseumCardContainer.styled";
import styled from "styled-components";

const MuseumCardGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 0 20px;
  grid-template-columns: auto;

  @media only screen and (min-width: 700px) {
    grid-template-columns: auto auto;
  }

  @media only screen and (min-width: 942px) {
    grid-template-columns: auto auto auto;
  }
`;

export const MuseumCardContainer = ({ results }) => {
  const [amountToShow, setAmountToShow] = useState(6);

  const showMore = () => setAmountToShow(amountToShow + 6);

  const showMuseums = () =>
    results
      .slice(0, amountToShow)
      .map((museum, id) => <MuseumCard museum={museum} key={id} />);

  return (
    <StyledMuseumCardContainer>
      <MuseumCardGrid>{showMuseums()}</MuseumCardGrid>
      {amountToShow <= results.length && (
        <StyledButton onClick={showMore}> Show more...</StyledButton>
      )}
    </StyledMuseumCardContainer>
  );
};
