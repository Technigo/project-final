import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import museumList from "../../../backend/data/museums.json";
import { MuseumCard } from "./MuseumCard";
import styled from "styled-components";

const LikedMuseumCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

const LikedMuseums = () => {
  const { authState } = useContext(AuthContext);
  const { accessToken } = authState;
  const [likedMuseumIds, setLikedMuseumIds] = useState([]);
  const [likedMuseumsData, setLikedMuseumsData] = useState([]);

  useEffect(() => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accessToken }),
    };
    fetch(`http://localhost:3000/favorites`, options)
      .then((response) => response.json())
      .then((response) =>
        setLikedMuseumIds(
          response.likedMuseums.map((likedMuseum) => likedMuseum.museumId)
        )
      );
  }, []);

  useEffect(() => {
    const museums = [...museumList].filter((museum) =>
      likedMuseumIds.find((likedMuseumId) => likedMuseumId === museum.id)
    );
    setLikedMuseumsData(museums);
  }, [likedMuseumIds]);

  return (
    <>
      <h3>Liked museums</h3>
      {likedMuseumsData.length > 0 ? (
        <LikedMuseumCardGrid>
          {likedMuseumsData.map((museum) => (
            <MuseumCard museum={museum} />
          ))}
        </LikedMuseumCardGrid>
      ) : (
        <i>You currently have no liked museums</i>
      )}
    </>
  );
};

export default LikedMuseums;
