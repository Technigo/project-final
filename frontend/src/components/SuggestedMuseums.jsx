import { useState, useEffect } from "react";
import styled from "styled-components";
import { MuseumCard } from "./MuseumCard";

export const SuggestedMuseums = ({ likedMuseumsData }) => {
  const [suggestedMuseums, setSuggestedMuseums] = useState([]);

  useEffect(() => {
    const fetchMuseums = async () => {
      try {
        const response = await fetch(
          "https://museek-2ejb.onrender.com/museums"
        );
        if (!response.ok) {
          throw new Error("Error fetching museums");
        }
        const data = await response.json();
        const shuffledMuseumArray = data.sort((a, b) => 0.5 - Math.random());
        const filteredMuseums = shuffledMuseumArray.filter((museum) => {
          return !likedMuseumsData
            .map((likedMuseum) => likedMuseum.museumId)
            .includes(museum.id);
        });

        setSuggestedMuseums(filteredMuseums.slice(0, 6));
      } catch (error) {
        console.error("There was en error fetching data:", error);
      }
    };

    fetchMuseums();
  }, []);

  return (
    <>
      <h3>ExtraMuseums</h3>
      <SuggestedMuseumCardGrid>
        {suggestedMuseums.map((museum) => (
          <MuseumCard museum={museum} key={museum.id} />
        ))}
      </SuggestedMuseumCardGrid>
    </>
  );
};

const SuggestedMuseumCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;
