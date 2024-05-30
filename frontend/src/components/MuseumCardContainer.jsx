import museumList from "../json/museums.json";
import { MuseumCard } from "./MuseumCard";
import { useState } from "react";

export const MuseumCardContainer = () => {
  const [amountToShow, setAmountToShow] = useState(4);

  const showMore = () => setAmountToShow(amountToShow + 4);

  const showMuseums = () =>
    museumList
      .slice(0, amountToShow)
      .map((museum, index) => <MuseumCard museum={museum} key={index} />);
  return (
    <>
      <div>{showMuseums()}</div>
      {amountToShow <= museumList.length && (
        <button onClick={showMore}> Show more...</button>
      )}
    </>
  );
};
