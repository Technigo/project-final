import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { MuseumCard } from "./MuseumCard";
import styled from "styled-components";

const LikedMuseumCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const LikedMuseums = ({likedMuseumsData}) => {
  const { authState } = useContext(AuthContext);
  const { accessToken } = authState;

  return (
    <>
      <h3>Liked museums</h3>
      {likedMuseumsData.length > 0 ? (
        <LikedMuseumCardGrid>
          {likedMuseumsData.map((likedMuseum) => (
            <MuseumCard museum={likedMuseum.museum} key={likedMuseum.id} />
          ))}
        </LikedMuseumCardGrid>
      ) : (
        <i>You currently have no liked museums</i>
      )}
    </>
  );
};

export default LikedMuseums;
