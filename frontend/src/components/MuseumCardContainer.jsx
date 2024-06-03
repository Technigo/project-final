import { useState } from "react";
import museumList from "../json/museums.json";
import { MuseumCard } from "./MuseumCard";
import StyledButton from "./styled/Button.styled";

export const MuseumCardContainer = () => {
  const [amountToShow, setAmountToShow] = useState(4);

  const showMore = () => setAmountToShow(amountToShow + 4);

  const showMuseums = () =>
    museumList
      .slice(0, amountToShow)
      .map((museum, id) => <MuseumCard museum={museum} key={id} />);
  return (
    <>
      <div>{showMuseums()}</div>
      {amountToShow <= museumList.length && (
        <StyledButton onClick={showMore}> Show more...</StyledButton>
      )}
    </>
  );
};
